
---

# Testes de Performance da API do Banco com K6

Repositório com testes de performance automatizados desenvolvidos com a ferramenta **Grafana K6**, escritos em **JavaScript**, focados na API do sistema bancário.

🔗 **Repositório:** https://github.com/priscilacerqueira21/banco-api-performance

---

## 📌 Introdução

Este projeto tem como objetivo simular diferentes cargas e cenários de uso para a API do banco, avaliando seu desempenho e identificando possíveis gargalos. Os testes são escritos com foco em modularidade, organização por contexto e reutilização de modelos de dados.

---

## ⚙️ Tecnologias Utilizadas

* **K6:** ferramenta open source para testes de carga e performance.
* **JavaScript (ES6)** para scripts dos testes.
* **GJSON:** para extração de dados em respostas JSON.
* **Variáveis de ambiente:** para configuração dinâmica, como `BASE_URL`.

---

## 📁 Estrutura do Repositório

```
banco-api-performance/
├── config/            # Arquivos de configuração de variáveis de ambiente
├── fixtures/          # Dados de entrada para os testes (ex: usuários, payloads)
├── helpers/           # Funções utilitárias para interação com a API
├── tests/             # Casos de teste organizados por módulo da API
├── utils/             # Funções utilitárias reutilizáveis
└── README.md          # Documento explicativo
```

---

## 🗂️ Descrição dos Diretórios

* **config/**: Arquivos para configuração das variáveis de ambiente (ex: URLs, tokens).
* **fixtures/**: Dados de entrada para os testes, como usuários e payloads.
* **helpers/**: Funções reutilizáveis para facilitar a interação com a API.
* **tests/**: Casos de teste organizados por funcionalidades/módulos da API.
* **utils/**: Funções utilitárias gerais que suportam os testes.

---

## 💻 Instalação e Execução

### 1. Clone o Repositório

```bash
git clone https://github.com/juliodelimas/banco-api-performance.git
cd banco-api-performance
```

### 2. Configure as Variáveis de Ambiente

Edite o arquivo `config.local.json` e defina a URL base da API que será testada:

```json
{
  "baseUrl": "http://localhost:3000"
}
```

> 💡 Essas variáveis serão usadas dinamicamente nos testes para montar as requisições.

### 3. Execute um Teste

```bash
k6 run tests/login.test.js
```

Se você não estiver usando o arquivo `config.local.json` ou uma abordagem de carregamento automático, passe a variável de ambiente diretamente:

```bash
k6 run tests/autenticacao/login.test.js -e BASE_URL=http://localhost:3000
```

### 4. Acompanhamento em Tempo Real e Exportação de Relatório

Para ativar o modo dashboard do K6 e exportar o relatório em HTML:

```bash
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=html-report.html \
k6 run tests/autenticacao/login.test.js \
-e BASE_URL=http://localhost:3000
```

Após a execução, o relatório será salvo como `html-report.html`.

---
