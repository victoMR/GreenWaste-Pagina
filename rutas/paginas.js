var rutas = require("express").Router();

// Pagina de inicio --------------------------------------------------------------------------- 
rutas.get("/inicio", (req, res) => {
    res.render("inicio");
  });

// Pagina de organicos -------------------------------------------------------------------------
rutas.get("/organicos", (req, res) => {
  res.render("pagina_organicos");
});

// Pagina de inorganicos -----------------------------------------------------------------------
rutas.get("/inorganicos", (req, res) => {
  res.render("pagina_inorganicos");
});

// Pagina de residuos medicos ------------------------------------------------------------------
rutas.get("/residuos_medicos", (req, res) => {
  res.render("residuos_medicos");
});

// Pagina de residuos peligrosos ---------------------------------------------------------------
rutas.get("/residuos_toxicos", (req, res) => {
  res.render("residuos_peligrosos");
});
  module.exports = rutas;