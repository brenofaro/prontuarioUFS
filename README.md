📘 Prontuário UFS – Sistema de Gestão de Pacientes e Anamneses

Sistema completo de gerenciamento de pacientes, anamneses, planos alimentares e dados clínicos, desenvolvido em FastAPI, React, PostgreSQL e Docker.
Projetado para clínicas, consultórios e ambientes acadêmicos, com foco na rapidez, segurança, escalabilidade e usabilidade.

🚀 Tecnologias Utilizadas
Backend

🐍 Python 3.10+

⚡ FastAPI

🗄️ PostgreSQL

🔐 SQLAlchemy + Alembic

🔧 Pydantic

🐳 Docker / Docker Compose (opcional)

📄 ReportLab (geração de PDFs, caso esteja usando)

Frontend

⚛️ React + Vite

🎨 Bootstrap / React-Bootstrap

🎨 CSS personalizado

📂 Estrutura do Projeto (Sugestão)
prontuarioUFS/
│
├── backend/
│   ├── src/
│   │   ├── api/
│   │   ├── database/
│   │   ├── schemas/
│   │   ├── entities/
│   │   └── services/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── docker-compose.yml (opcional)
└── README.md

⚙️ Instalação e Execução (Modo Servidor – Recomendado)
1. Backend (FastAPI)
cd backend
python -m venv venv
source venv/bin/activate  # Linux
venv\Scripts\activate     # Windows

pip install -r requirements.txt
uvicorn src.main:app --host 0.0.0.0 --port 8000

2. Banco de Dados (PostgreSQL)

Crie o banco:

CREATE DATABASE prontuario;


Configure a variável de ambiente:

DATABASE_URL=postgresql://usuario:senha@localhost:5432/prontuario

3. Frontend (React + Vite)
cd frontend
npm install
npm run dev


E acesse:

http://localhost:5173

🌐 Executando em Modo Cliente-Servidor

No servidor:

uvicorn src.main:app --host 0.0.0.0 --port 8000


Nos clientes:

http://IP_DO_SERVIDOR:8000


Se deseja fixar o IP do servidor, configure:

DHCP Reservation no roteador
ou

IP fixo no Windows/Linux

🐳 Executar com Docker (opcional)
docker-compose up --build


A aplicação sobe com:

FastAPI → Porta 8000

PostgreSQL → Porta 5432

React → Porta 5173

📄 Geração de PDF

O sistema inclui geração de PDFs usando ReportLab, com:

Dados do paciente

Anamneses

Plano alimentar

Estilo customizado

Exemplo:

from reportlab.platypus import SimpleDocTemplate

doc = SimpleDocTemplate("plano_alimentar.pdf")

🔒 Segurança

Sanitização de inputs

Configuração de CORS

Uso de .env para credenciais

Melhor com sistema cliente-servidor via rede local

Suporte para deploy offline
