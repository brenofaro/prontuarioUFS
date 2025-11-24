from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# Pega DATABASE_URL da variável de ambiente
# Se não existir → usa SQLite local
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./prontuario.db")
print("🟢 USANDO BANCO:", DATABASE_URL)

# Detecta se o banco é PostgreSQL
USING_POSTGRES = DATABASE_URL.startswith("postgresql")

# connect_args só é usado no SQLite
connect_args = {} if USING_POSTGRES else {"check_same_thread": False}

engine = create_engine(
    DATABASE_URL,
    connect_args=connect_args
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
