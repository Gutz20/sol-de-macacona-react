import React from "react";

const Vista_B = () => {
  return (
    <>
      <div>
        <h2
          className="w-auto text-center text-red-900 py-14 px-20 grid  relative text-4xl font-bold drop-shadow-2xl
        max-sm:relative max-sm:py-5 max-sm:px-5  max-sm:font-Itim max-sm:text-xl"
        >
          Lotes disponibles con acabados de lujo
        </h2>
        <div
          className="relative"
          style={{ display: "flex", justifyContent: "center", gap: "90px" }}
        >
          <button
            className="relative rounded-lg px-3.5 py-2 text-white font-bold hover:text-slate-900 max-sm:py-0.5 max-sm:px-1.5 max-sm:text-xs font-serif"
            style={{
              backgroundColor: "#9f9f9f",
              borderRadius: "5px",
              padding: "10px 30px",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              fontSize: "18px",
              transition: "background-color 0.3s ease",
            }}
          >
            MODELO A
          </button>
          <button
            className="relative rounded-lg px-3.5 py-2 text-white font-bold hover:text-slate-900 max-sm:py-0.5 max-sm:px-1.5 max-sm:text-xs font-serif"
            style={{
              backgroundColor: "#9f9f9f",
              borderRadius: "5px",
              padding: "10px 30px",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              fontSize: "18px",
              transition: "background-color 0.3s ease",
            }}
          >
            MODELO B
          </button>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ marginLeft: "150px", marginBottom: "50px" }}>
            <h2
              className="font-bold text-5xl"
              style={{
                marginTop: "40px",
              }}
            >
              MODELO B
            </h2>
            <h2
              className="font-bold text-xl"
              style={{
                marginTop: "10px",
              }}
            >
              Área desde 265 m2
            </h2>
            <ul
              style={{
                listStyleType: "square",
                paddingLeft: "40px",
                marginTop: "10px",
              }}
            >
              <li>Áreas verdes</li>
              <li>Lavandería</li>
              <li>Comedor</li>
              <li>6 dormitorios</li>
              <li>Terraza</li>
              <li>Sala</li>
              <li>Cocina</li>
              <li>Estudio</li>
            </ul>
          </div>
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <div
              className="relative"
              style={{
                display: "flex",
                justifyContent: "right",
                marginRight: "40px",
                marginTop: "40px",
                marginBottom: "15px",
              }}
            >
              <button
                className="relative rounded-lg px-3.5 py-2 text-white font-bold hover:text-slate-900 max-sm:py-0.5 max-sm:px-1.5 max-sm:text-xs font-serif"
                style={{
                  backgroundColor: "#9f9f9f",
                  borderRadius: "5px",
                  padding: "10px 30px",
                  border: "none",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  fontSize: "18px",
                  transition: "background-color 0.3s ease",
                }}
              >
                VISTA A
              </button>
            </div>
            <div
              className="relative"
              style={{
                display: "flex",
                justifyContent: "right",
                marginRight: "40px",
                marginTop: "40px",
                marginBottom: "15px",
              }}
            >
              <button
                className="relative rounded-lg px-3.5 py-2 text-white font-bold hover:text-slate-900 max-sm:py-0.5 max-sm:px-1.5 max-sm:text-xs font-serif"
                style={{
                  backgroundColor: "#9f9f9f",
                  borderRadius: "5px",
                  padding: "10px 30px",
                  border: "none",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  fontSize: "18px",
                  transition: "background-color 0.3s ease",
                }}
              >
                VISTA B
              </button>
            </div>
            <div
              className="relative"
              style={{
                display: "flex",
                justifyContent: "right",
                marginRight: "40px",
                marginTop: "40px",
                marginBottom: "15px",
              }}
            >
              <button
                className="relative rounded-lg px-3.5 py-2 text-white font-bold hover:text-black max-sm:py-0.5 max-sm:px-1.5 max-sm:text-xs font-serif"
                style={{
                  backgroundColor: "#9f9f9f",
                  borderRadius: "5px",
                  padding: "10px 30px",
                  border: "none",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  fontSize: "18px",
                  transition: "background-color 0.3s ease",
                }}
              >
                VISTA C
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vista_B;
