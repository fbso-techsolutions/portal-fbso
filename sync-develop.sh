#!/usr/bin/env bash
# sync-develop.sh — sincroniza o repositório local após merge na UI do GitHub.
#
# Uso:
#   ./sync-develop.sh                    # roda no repo atual
#   ./sync-develop.sh /caminho/do/repo   # roda em outro caminho
#
# Passos equivalentes (manuais):
#   git checkout develop && git pull --ff-only origin develop && git fetch --prune
#   + apaga branches locais já mergeadas (exceto develop/main)
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

# 2. Vai para a develop.
echo "▶ git checkout develop"
git checkout develop

# 3. Atualiza a develop local (fast-forward only — nunca cria merge local).
echo "▶ git pull --ff-only origin develop"
git pull --ff-only origin develop

# 4. Remove refs remotas de branches já deletadas na UI.
echo "▶ git fetch --prune"
git fetch --prune

# 5. Apaga branches locais já mergeadas na develop (exceto develop/main).
echo "▶ apagando branches locais mergeadas..."
merged=$(git branch --merged develop | sed 's/^[* ]*//' | grep -vE '^(develop|main)$' || true)
if [ -n "$merged" ]; then
  echo "$merged" | while IFS= read -r b; do
    [ -n "$b" ] && git branch -d "$b"
  done
else
  echo "  (nenhuma branch local mergeada além de develop/main)"
fi

echo "════════════════════════════════════════════════"
echo "▶ estado final:"
git status -sb
echo "▶ branches:"
git branch -a
echo "════════════════════════════════════════════════"
echo "✅ Sincronização concluída."
