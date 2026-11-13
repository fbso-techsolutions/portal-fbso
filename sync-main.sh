#!/usr/bin/env bash
# sync-main.sh — sincroniza o repositório local após merge na UI do GitHub.
#
# Uso:
#   ./sync-main.sh                    # roda no repo atual
#   ./sync-main.sh /caminho/do/repo   # roda em outro caminho
#
# Passos equivalentes (manuais):
#   git checkout main && git pull --ff-only origin main && git fetch --prune
#   + apaga branches locais já mergeadas (exceto main)
set -euo pipefail

REPO="${1:-$(pwd)}"
cd "$REPO"

echo "════════════════════════════════════════════════"
echo " Sincronizando: $(basename "$REPO")"
echo "════════════════════════════════════════════════"

# 1. Proteção: não roda com working tree sujo (evita perder/embaralhar mudanças).
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "⚠️  Working tree com mudanças não commitadas."
  echo "    Commit ou stash antes de sincronizar. Abortando (nada foi alterado)."
  exit 1
fi

# 2. Vai para a main.
echo "▶ git checkout main"
git checkout main

# 3. Atualiza a main local (fast-forward only — nunca cria merge local).
echo "▶ git pull --ff-only origin main"
git pull --ff-only origin main

# 4. Remove refs remotas de branches já deletadas na UI.
echo "▶ git fetch --prune"
git fetch --prune

# 5. Apaga branches locais que já foram mergeadas na main (exceto a própria main).
echo "▶ apagando branches locais mergeadas..."
merged=$(git branch --merged main | sed 's/^[* ]*//' | grep -v '^main$' || true)
if [ -n "$merged" ]; then
  echo "$merged" | while IFS= read -r b; do
    [ -n "$b" ] && git branch -d "$b"
  done
else
  echo "  (nenhuma branch local mergeada além de main)"
fi

echo "════════════════════════════════════════════════"
echo "▶ estado final:"
git status -sb
echo "▶ branches:"
git branch -a
echo "════════════════════════════════════════════════"
echo "✅ Sincronização concluída."
