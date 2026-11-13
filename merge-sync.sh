#!/usr/bin/env bash
# merge-sync.sh — merge com bypass de regras + delete da branch + sync local.
#
# Uso:
#   ./merge-sync.sh <numero-do-pr|url|branch> [branch-base]
#   ./merge-sync.sh 38            # PR #38, base main
#   ./merge-sync.sh feat/x main   # por nome de branch
#
# Equivale, em um comando, a: UI (bypass + merge + delete branch) + sync local.
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

# ── 1. Argumentos ────────────────────────────────────────────────────────────
PR_REF="${1:-}"
BASE_BRANCH="${2:-main}"

if [ -z "$PR_REF" ]; then
  echo "❌ Informe o PR (número, URL ou branch) a mergear."
  echo "Uso: ./merge-sync.sh <numero-do-pr|url|branch> [branch-base]"
  exit 1
fi

# ── 2. Repo correto ──────────────────────────────────────────────────────────
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "❌ Execute dentro do repositório."
  exit 1
fi
REMOTE_URL="$(git config --get remote.origin.url || true)"
if [[ "$REMOTE_URL" != *"portal-fbso"* ]]; then
  echo "❌ Repositório inesperado: ${REMOTE_URL:-<sem remote>}"
  echo "   Este script é para o repo 'portal-fbso'."
  exit 1
fi

# ── 3. Working tree limpo ────────────────────────────────────────────────────
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "⚠️  Working tree com mudanças não commitadas. Commit/stash antes."
  exit 1
fi

CURRENT_BRANCH="$(git branch --show-current)"

# ── 4. Preview + merge com bypass ────────────────────────────────────────────
echo "ℹ️  PR: $PR_REF · base: $BASE_BRANCH · branch atual: $CURRENT_BRANCH"
echo "🚀 gh pr merge (bypass rules) + delete branch..."
gh pr merge "$PR_REF" --merge --admin --delete-branch

# ── 5. Sincroniza local ──────────────────────────────────────────────────────
echo "🔄 checkout $BASE_BRANCH + pull --ff-only + prune..."
git checkout "$BASE_BRANCH"
git pull --ff-only origin "$BASE_BRANCH"
git fetch --prune

# ── 6. Remove branch local residual (gh não apaga branch checkeada) ──────────
if [ "$CURRENT_BRANCH" != "$BASE_BRANCH" ] && git show-ref --verify --quiet "refs/heads/$CURRENT_BRANCH"; then
  echo "🧹 removendo branch local residual '$CURRENT_BRANCH'..."
  git branch -d "$CURRENT_BRANCH" 2>/dev/null || git branch -D "$CURRENT_BRANCH"
fi

echo "🎉 Merge concluído e repositório sincronizado."
git status -sb
