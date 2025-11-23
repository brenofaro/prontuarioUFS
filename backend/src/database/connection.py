from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# Se a variável DATABASE_URL existir → usa (Docker / produção)
# Caso contrário → usa SQLite local (desenvolvimento)
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./prontuario.db")

# Detecta se é PostgreSQL
is_postgres = DATABASE_URL.startswith("postgres")

# Configura os argumentos extras dependendo do banco
connect_args = {} if is_postgres else {"check_same_thread": False}

engine = create_engine(
    DATABASE_URL,
    connect_args=connect_args
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
