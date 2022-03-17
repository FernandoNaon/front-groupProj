import React from "react";
import style from "./Paginate.module.css";
import Button from "react-bootstrap/Button";

export default function Paginate({ qty, allshows, paginate }) {
  const page = [];
  const [numero, setNumero] = React.useState(0)
  for (var i = 1; i <= Math.ceil(allshows / qty); i++) {
    page.push(i);
  }
  return (
    <div>
      <ul className={style.number}>
      <li>
        { numero>2?
          <Button variant="outline-dark" onClick={() => {paginate(numero-1)
            setNumero(numero-1)}} 
            key={numero + 1} className={style.btn}>{'<'}
          </Button>:null
        }
      </li>
        {page &&
          page.map((number) => (
            <li key={number}>
              <Button
                variant="outline-dark"
                active={numero===number?true:false}
                onClick={() => { paginate(number) 
                  setNumero(number) }}
                key={number + 1}
                className={style.btn}
              >
                {number}
              </Button>
            </li>
          )).slice(numero<2? 0 : numero -2, numero +1) }
          <li>
            {
                numero<12?
              <Button variant="outline-dark" onClick={() => {paginate(numero+1)
                setNumero(numero+1)}} 
                key={numero + 1} className={style.btn}>{'>'}
          </Button>:null
            }
          </li>
      </ul>
    </div>
  );
}

//este return lo probe con las flechitas y Previos y Next en lugar de los numeros
//     return (
//         <div>

//             <div>
//                 <button onClick={previusPage} className={styles.btn}>
//                     &laquo; Previous
//                 </button>
//                 <button onClick={nextPage} className={styles.btn}>
//                     Next &raquo;
//                 </button>
//             </div>

//         </div>
//     );
