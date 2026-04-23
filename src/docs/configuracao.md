# 🚀 TEMPLATE EXPO SDK 54 — SETUP COMPLETO

---

# 1️⃣ CRIAR PROJETO (FORÇANDO TEMPLATE TYPESCRIPT)

```bash
npx create-expo-app@latest app -t expo-template-blank-typescript
```

---

# 2️⃣ FIXAR VERSÃO DO EXPO (SDK 54)

```bash
npm install expo@~54.0.0
```

---

# 3️⃣ INSTALAR DEPENDÊNCIAS BASE DO EXPO (SDK 54)

```bash
npx expo install react-native-screens
npx expo install react-native-safe-area-context
npx expo install react-native-gesture-handler
npx expo install expo-status-bar
npx expo install expo-local-authentication
```

---

# 4️⃣ INSTALAR NAVEGAÇÃO

```bash
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install @react-navigation/stack
```

---

# 5️⃣ LIMPAR CACHE (OBRIGATÓRIO)

```bash
npx expo start -c
```

---

# 6️⃣ ESTRUTURA DE PASTAS

Criar estrutura padrão:

```bash
mkdir src
mkdir src/components
mkdir src/screens
mkdir src/navigation
mkdir src/services
mkdir src/hooks
mkdir src/types
```

---

# 7️⃣ ARQUIVOS BASE DO TEMPLATE

```bash
touch src/screens/TelaAutenticacao.tsx
touch src/screens/TelaInicial.tsx
touch src/screens/TelaConfiguracoes.tsx

touch src/navigation/NavegacaoAbas.tsx

touch src/services/servicoAutenticacao.ts

touch src/AppRoutes.tsx
```

---

# 8️⃣ FUNÇÃO DAS TELAS

## 🔐 TelaAutenticacao.tsx

- Primeira tela do app
- Exibe logo e identidade visual
- Executa autenticação biométrica
- Libera acesso ao app

---

## 🏠 TelaInicial.tsx

- Tela principal do usuário
- Conteúdo inicial do app

---

## ⚙️ TelaConfiguracoes.tsx

- Configurações gerais do app

---

## 🧭 NavegacaoAbas.tsx

- Controle de navegação inferior
- Define telas principais

---

# 9️⃣ SERVIÇO DE AUTENTICAÇÃO

## servicoAutenticacao.ts

- Usa biometria do sistema
- Verifica hardware disponível
- Retorna sucesso/falha

---

# 🔟 FLUXO DO APP

```
App.tsx
   ↓
TelaAutenticacao (biometria)
   ↓ sucesso
Navegação Principal (Tabs)
   ↓
Telas do app
```

---

# 📦 BIBLIOTECAS USADAS

## 🧭 Navegação

- @react-navigation/native
- @react-navigation/bottom-tabs
- @react-navigation/stack

## 📱 Base React Native

- react-native-screens
- react-native-safe-area-context
- react-native-gesture-handler

## 🎨 UI

- expo-status-bar

## 🔐 Segurança

- expo-local-authentication

---

# 🚀 COMANDOS PRINCIPAIS

## Criar projeto

```bash
npx create-expo-app app -t expo-template-blank-typescript
```

## Rodar projeto

```bash
npx expo start
```

## Rodar com cache limpo

```bash
npx expo start -c
```

## Instalar dependência Expo

```bash
npx expo install <pacote>
```

## Instalar dependência npm

```bash
npm install <pacote>
```

---

# 📌 PADRÃO DO TEMPLATE

- SDK fixo: 54
- TypeScript obrigatório
- Navegação padrão: Bottom Tabs
- Autenticação biométrica padrão
- Estrutura modular em `src/`

---
