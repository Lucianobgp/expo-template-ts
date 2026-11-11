# Guia de Inicialização de Projeto — Expo + Expo Router + TypeScript

## 📌 Legenda de Identificação Rápida

Para facilitar a leitura e a cópia dos comandos no terminal:

- ⚡ **[COMANDO]:** Linhas que devem ser executadas diretamente no terminal ou linha de comando.
- 💡 **[DICA / ATENÇÃO]:** Recomendações e avisos importantes sobre os passos.

---

# Introdução

Este guia descreve, passo a passo, como preparar o ambiente, criar um novo projeto **Expo** utilizando o **Expo Router**, configurar **TypeScript**, organizar as rotas dentro de `src/app` e configurar uma estrutura inicial de navegação utilizando abas.

A estrutura proposta utiliza:

- Expo
- Expo Router
- TypeScript
- Navegação por arquivos
- `src/app`
- Grupo de rotas `(tabs)`
- Navegação por abas
- `@expo/vector-icons`
- Funções e nomes personalizados em português

---

# Pré-requisitos

- Sistema operacional: **Linux, macOS ou Windows**
- Acesso ao terminal / linha de comando
- Node.js instalado ou possibilidade de instalá-lo
- npm instalado junto com o Node.js

---

# Etapa 1 — Verificar se o Node.js está instalado

Ao instalar o **Node.js**, o **npm** (gerenciador de pacotes) é instalado automaticamente junto com ele.

Abra o terminal e execute:

⚡ **[COMANDO]**

```bash
node -v
```

Se aparecer um número de versão, por exemplo:

```text
v20.11.0
```

o Node.js está instalado.

Verifique também o npm:

⚡ **[COMANDO]**

```bash
npm -v
```

Se os dois comandos apresentarem uma versão, o ambiente básico está instalado.

> 💡 **[DICA]** Utilize uma versão **LTS do Node.js** compatível com a versão do Expo utilizada no projeto.

Se o comando `node -v` apresentar um erro como:

```text
command not found
```

ou, no Windows:

```text
'node' is not recognized...
```

o Node.js não está instalado. Siga para a Etapa 2.

---

# Etapa 2 — Instalar o Node.js

O npm é instalado automaticamente junto com o Node.js.

Escolha a instrução correspondente ao seu sistema operacional.

---

## Linux (Ubuntu/Debian) — Via NVM

O **NVM (Node Version Manager)** permite instalar e gerenciar versões do Node.js de forma prática.

### Instalar o NVM

⚡ **[COMANDO]**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### Atualizar o terminal

⚡ **[COMANDO]**

```bash
source ~/.bashrc
```

### Instalar a versão LTS do Node.js

⚡ **[COMANDO]**

```bash
nvm install --lts
```

### Verificar o Node.js

⚡ **[COMANDO]**

```bash
node -v
```

### Verificar o npm

⚡ **[COMANDO]**

```bash
npm -v
```

---

## macOS

Se o **Homebrew** estiver instalado, utilize:

⚡ **[COMANDO]**

```bash
brew install node
```

Depois confirme:

⚡ **[COMANDO]**

```bash
node -v
```

⚡ **[COMANDO]**

```bash
npm -v
```

---

## Windows

Baixe o instalador recomendado do Node.js no site oficial:

https://nodejs.org

Execute o instalador e siga o assistente:

```text
Next → Next → Finish
```

Depois da instalação, feche e abra novamente o **PowerShell** ou **CMD**.

Confirme:

⚡ **[COMANDO]**

```powershell
node -v
```

⚡ **[COMANDO]**

```powershell
npm -v
```

---

# Etapa 3 — Criar o Projeto Expo

## Template Tabs

> 💡 **[ATENÇÃO]** Antes de criar o projeto, navegue até a pasta onde seus projetos serão armazenados.

⚡ **[COMANDO]**

```bash
cd /caminho/para/sua-pasta-de-projetos
```

Para criar o projeto utilizando o template **Tabs**, execute:

⚡ **[COMANDO]**

```bash
npx create-expo-app@latest NOME-DO-PROJETO --template tabs --yes
```

> 💡 O template `tabs` fornece uma estrutura inicial baseada no **Expo Router** e **TypeScript**.

Depois que o projeto for criado, entre na pasta:

⚡ **[COMANDO]**

```bash
cd NOME-DO-PROJETO
```

---

# Etapa 4 — Limpeza de Arquivos e Instalação de Pacotes

Nesta etapa serão removidos alguns arquivos e pastas criados pelo template porque este projeto utilizará uma estrutura personalizada.

## Linux / macOS

⚡ **[COMANDO]**

```bash
rm -rf AGENTS.md LICENSE app components constants
```

Depois instale explicitamente a biblioteca de ícones:

⚡ **[COMANDO]**

```bash
npx expo install @expo/vector-icons
```

---

## Windows — PowerShell

⚡ **[COMANDO]**

```powershell
Remove-Item -Recurse -Force AGENTS.md, LICENSE, app, components, constants -ErrorAction SilentlyContinue
```

Depois instale os ícones:

⚡ **[COMANDO]**

```powershell
npx expo install @expo/vector-icons
```

> 💡 **[ATENÇÃO]** A pasta `app` removida nesta etapa é a pasta localizada na **raiz do projeto**, fora de `src`.

---

# Etapa 5 — Criar a Estrutura `src/app`

O projeto utilizará a seguinte organização:

```text
src/
└── app/
    ├── _layout.tsx
    │
    └── (tabs)/
        ├── _layout.tsx
        ├── index.tsx
        └── aba2.tsx
```

O grupo `(tabs)` será responsável pelas telas que pertencem à navegação por abas.

> 💡 **[DICA]** Os parênteses em `(tabs)` indicam um **grupo de rotas** do Expo Router. O nome `(tabs)` não aparece na URL ou no caminho lógico da navegação.

---

## Linux / macOS

Crie as pastas:

⚡ **[COMANDO]**

```bash
mkdir -p src/app/'(tabs)'
```

Crie os arquivos:

⚡ **[COMANDO]**

```bash
touch src/app/_layout.tsx \
src/app/'(tabs)'/_layout.tsx \
src/app/'(tabs)'/index.tsx \
src/app/'(tabs)'/aba2.tsx
```

---

## Windows — PowerShell

Crie as pastas:

⚡ **[COMANDO]**

```powershell
New-Item -ItemType Directory -Path "src\app\(tabs)" -Force
```

Crie os arquivos:

⚡ **[COMANDO]**

```powershell
New-Item -ItemType File -Path "src\app\_layout.tsx" -Force
New-Item -ItemType File -Path "src\app\(tabs)\_layout.tsx" -Force
New-Item -ItemType File -Path "src\app\(tabs)\index.tsx" -Force
New-Item -ItemType File -Path "src\app\(tabs)\aba2.tsx" -Force
```

---

# Etapa 6 — Configurar o Layout Principal

O arquivo:

```text
src/app/_layout.tsx
```

será responsável pelo **layout raiz do aplicativo**.

Ele não será responsável diretamente pelas abas.

## 📄 `src/app/_layout.tsx`

```tsx
import { Stack } from "expo-router";

export default function LayoutPrincipal() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
```

> 💡 **[DICA]** O `Stack` representa a navegação principal do aplicativo, enquanto o grupo `(tabs)` contém a navegação por abas.

---

# Etapa 7 — Configurar as Abas

O arquivo:

```text
src/app/(tabs)/_layout.tsx
```

será responsável exclusivamente pela configuração das abas.

## 📄 `src/app/(tabs)/_layout.tsx`

```tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function LayoutAbas() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="aba2"
        options={{
          title: "Aba 2",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
```

---

# Etapa 8 — Criar a Tela Inicial

## 📄 `src/app/(tabs)/index.tsx`

```tsx
import { View, Text, StyleSheet } from "react-native";

export default function TelaInicio() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Tela Inicial</Text>

      <Text style={estilos.subtitulo}>Bem-vindo ao seu aplicativo!</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 16,
    color: "#666",
  },
});
```

---

# Etapa 9 — Criar a Segunda Aba

## 📄 `src/app/(tabs)/aba2.tsx`

```tsx
import { View, Text, StyleSheet } from "react-native";

export default function TelaSegundaAba() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Segunda Aba</Text>

      <Text style={estilos.subtitulo}>Conteúdo da segunda tela aqui.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 16,
    color: "#666",
  },
});
```

---

# Etapa 10 — Estrutura Final do Projeto

Depois de executar todas as etapas, a estrutura principal deverá estar semelhante a esta:

```text
NOME-DO-PROJETO/
│
├── src/
│   └── app/
│       ├── _layout.tsx
│       │
│       └── (tabs)/
│           ├── _layout.tsx
│           ├── index.tsx
│           └── aba2.tsx
│
├── assets/
├── node_modules/
│
├── app.json
├── package.json
├── tsconfig.json
└── ...
```

> 💡 **[ATENÇÃO]** A pasta `app` localizada na raiz do projeto foi removida na Etapa 4. As rotas do aplicativo ficam dentro de `src/app`.

---

# Etapa 11 — Executar o Projeto

Com o projeto configurado, inicie o servidor de desenvolvimento:

⚡ **[COMANDO]**

```bash
npx expo start
```

Após iniciar o servidor, o Expo exibirá um **QR Code** no terminal.

Você poderá:

- 📱 Escanear o QR Code utilizando o **Expo Go** no celular.
- 🤖 Pressionar `a` para abrir no emulador Android.
- 🍎 Pressionar `i` para abrir no simulador iOS.

---

# Atalhos Diretos de Execução

## Android

⚡ **[COMANDO]**

```bash
npx expo start --android
```

## iOS

⚡ **[COMANDO]**

```bash
npx expo start --ios
```

---

# Resultado Final

Ao concluir este guia, o projeto estará configurado com:

- ✅ Expo
- ✅ Expo Router
- ✅ TypeScript
- ✅ Navegação baseada em arquivos
- ✅ Estrutura `src/app`
- ✅ Grupo de rotas `(tabs)`
- ✅ Navegação por abas
- ✅ `@expo/vector-icons`
- ✅ Layout raiz utilizando `Stack`
- ✅ Layout das abas utilizando `Tabs`
- ✅ Tela inicial
- ✅ Segunda aba
- ✅ Funções e nomes personalizados em português

A estrutura está preparada para continuar o desenvolvimento do aplicativo sem misturar a configuração do **layout principal** com a configuração específica das **abas**.
