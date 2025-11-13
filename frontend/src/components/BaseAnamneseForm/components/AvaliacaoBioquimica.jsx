import React from "react";

const AvaliacaoBioquimica = ({ formData, setFormData }) => {
  // Função genérica para atualizar qualquer campo dentro de avaliacao_bioquimica
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      avaliacao_bioquimica: {
        ...formData.avaliacao_bioquimica,
        [name]: value,
      },
    });
  };

  return (
    <>
      <div>
        <label htmlFor="data_avaliacao">Data:</label>
        <input
          type="date"
          name="data"
          id="data_avaliacao"
          value={formData.avaliacao_bioquimica.data || ""}
          onChange={handleChange}
        />
      </div>

      <div className="d-flex flex-column mt-2">
        <label htmlFor="descricao_avaliacao">Descrição:</label>
        <textarea
          name="descricao"
          id="descricao_avaliacao"
          value={formData.avaliacao_bioquimica.descricao || ""}
          onChange={handleChange}
          rows="4"
          cols="50"
        />
      </div>
    </>
  );
};

export default AvaliacaoBioquimica;
