import React from "react";
import casa2 from "C:/Projetos/airbnbProject/front-end/public/casa2.png";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src={casa2}
        alt="Imagem da acomodação"
        className="aspect-square rounded-2xl object-cover"
      />

      <div>
        <h3 className="text-xl font-semibold">Rio Preto da Eva, Grécia</h3>

        <p className="truncate text-gray-600">
          Viva uma experiência única nesta casa moderna incrustada no alto das
          montanhas, com arquitetura minimalista e uma vista panorâmica de tirar
          o fôlego. Projetada para proporcionar conforto e integração total com
          a natureza, cada canto desta casa oferece momentos de paz, luxo e
          contemplação.
        </p>
      </div>

      <p>
        {" "}
        <span className="font-semibold">R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Item;
