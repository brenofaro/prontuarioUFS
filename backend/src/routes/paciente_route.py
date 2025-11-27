from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from src.models.paciente_model import PacienteCreate, PacienteResponse
from src.services.paciente_service import (
    cadastrar_paciente, 
    deletar_paciente, 
    listar_pacientes, 
    buscar_paciente, 
    atualizar_paciente,
    buscar_paciente_por_nome
)
from src.database.connection import get_db

router = APIRouter(prefix="/pacientes", tags=["Pacientes"])


# CREATE
@router.post("/cadastrar", response_model=PacienteResponse)
async def cadastrar(paciente: PacienteCreate, db: Session = Depends(get_db)):
    """
    Cadastra um novo paciente no banco de dados.

    Args:
        paciente (PacienteCreate): Dados enviados pelo cliente.
        db (Session): Sessão ativa do banco de dados.

    Returns:
        PacienteResponse: Objeto recém-criado.

    Raises:
        HTTPException: Se ocorrer erro interno durante a criação.
    """
    try:
        return await cadastrar_paciente(paciente, db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# DELETE
@router.delete("/{id}")
async def deletar(id: int, db: Session = Depends(get_db)):
    """
    Remove um paciente do banco de dados.

    Args:
        id (int): ID do paciente.
        db (Session): Sessão ativa do banco de dados.

    Returns:
        dict: Mensagem de confirmação.

    Raises:
        HTTPException: Caso o paciente não exista.
    """
    sucesso = await deletar_paciente(id, db)
    if not sucesso:
        raise HTTPException(status_code=404, detail="Paciente não encontrado")
    return {"message": "Paciente excluído com sucesso"}


# READ - listar todos
@router.get("/", response_model=list[PacienteResponse])
async def listar(db: Session = Depends(get_db)):
    """
    Lista todos os pacientes cadastrados.

    Args:
        db (Session): Sessão ativa do banco de dados.

    Returns:
        list[PacienteResponse]: Lista de pacientes.
    """
    return await listar_pacientes(db)


# READ - buscar por id
@router.get("/{id}", response_model=PacienteResponse)
async def buscar(id: int, db: Session = Depends(get_db)):
    """
    Busca um paciente pelo seu ID.

    Args:
        id (int): ID do paciente.
        db (Session): Sessão ativa do banco de dados.

    Returns:
        PacienteResponse: Paciente encontrado.

    Raises:
        HTTPException: Caso o paciente não exista.
    """
    paciente = await buscar_paciente(id, db)
    if not paciente:
        raise HTTPException(status_code=404, detail="Paciente não encontrado")
    return paciente


# UPDATE
@router.put("/{id}", response_model=PacienteResponse)
async def atualizar(id: int, paciente: PacienteCreate, db: Session = Depends(get_db)):
    """
    Atualiza os dados de um paciente existente.

    Args:
        id (int): ID do paciente.
        paciente (PacienteCreate): Dados atualizados.
        db (Session): Sessão ativa do banco de dados.

    Returns:
        PacienteResponse: Registro atualizado.

    Raises:
        HTTPException: Caso o paciente não exista.
    """
    atualizado = await atualizar_paciente(id, paciente, db)
    if not atualizado:
        raise HTTPException(status_code=404, detail="Paciente não encontrado")
    return atualizado


# 🔍 READ - buscar por nome
@router.get("/buscar/", response_model=list[PacienteResponse])
async def buscar_por_nome(
    nome: str | None = Query(None, description="Nome (ou parte do nome) do paciente"),
    db: Session = Depends(get_db),
):
    """
    Busca pacientes filtrando pelo nome (parcial ou completo).

    Essa busca é case-insensitive e utiliza operador LIKE.

    Args:
        nome (str | None): Nome ou parte do nome. Obrigatório.
        db (Session): Sessão ativa do banco de dados.

    Returns:
        list[PacienteResponse]: Pacientes cujo nome corresponde ao filtro.

    Raises:
        HTTPException:
            - 400: se nenhum nome for informado
            - 404: se nenhum paciente for encontrado
    """
    if not nome:
        raise HTTPException(status_code=400, detail="Informe nome para busca")

    pacientes = await buscar_paciente_por_nome(nome, db)
    if not pacientes:
        raise HTTPException(status_code=404, detail="Nenhum paciente encontrado")
    return pacientes
