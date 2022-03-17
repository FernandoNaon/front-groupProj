import React from "react";
import { Link } from "react-router-dom";
import style from "./TermsAndConditions.module.css";
import { Navbar, Form, Container } from "react-bootstrap";

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar
        className={style.heigthConfig}
        bg="dark"
        variant="dark"
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <p className={style.logo}>A Sala Llena</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className={style.cardContainer}>
        <h3>TÉRMINOS Y CONDICIONES</h3>
        <p>
          Cuando adquiera sus Tickets a través del Sistema A Sala Llena-OnLine
          (www.ASalaLlena.com.ar), por favor asegúrese de conocer y aceptar las
          siguientes políticas, términos y condiciones:
        </p>
        <br></br>

        <p>
          Al utilizar los servicios de A Sala Llena, el titular de datos
          personales presta su consentimiento conforme a lo establecido en la
          ley 25.326 de Protección de Datos Personales, a tenor de lo cual
          declara conocer y aceptar que sus datos personales integren la base de
          datos de A Sala Llena, otorgando por la presente, autorización expresa
          para: (i) el tratamiento automatizado de dichos datos e información y
          (ii) su utilización para servicios actuales o futuros, que desarrolle
          A Sala Llena.
        </p>
        <br></br>

        <p>
          El consumidor conoce y consiente que al aceptar el casillero titulado
          “Acepto los términos y condiciones del servicio”, sus datos personales
          serán cedidos por A Sala Llena a el/los productor/es del evento
          quien/es podrá/n utilizarlos para fines publicitarios. El consumidor
          podrá revocar el consentimiento otorgado en cualquier momento
          comunicándose con la empresa a través del siguiente enlace: www.A Sala
          Llena.com.ar/ayuda
        </p>
        <br></br>

        <p>
          El titular de los datos personales tiene la facultad de ejercer el
          derecho de acceso a los mismos en forma gratuita y a intervalos no
          inferiores a seis meses, salvo que se acredite tener un interés
          legítimo al efecto conforme lo establecido en el artículo 14, inciso 3
          de la Ley Nº 25.326. El titular de los datos, tiene además la
          posibilidad de ejercer los derechos de rectificación, y supresión de
          los datos conforme artículo 6, inciso “e” de la Ley 25.326.
        </p>
        <br></br>

        <p>
          Ley 25.326- Artículo 27- inciso 3. — (Archivos, registros o bancos de
          datos con fines de publicidad). “El titular podrá en cualquier momento
          solicitar el retiro o bloqueo de su nombre de los bancos de datos a
          los que se refiere el presente artículo”.
        </p>
        <br></br>

        <p>
          Decreto 1558/01 –Anexo I- Artículo.- 3º párrafo. “En toda comunicación
          con fines de publicidad que se realice por correo, teléfono, correo
          electrónico, Internet u otro medio a distancia a conocer, se deberá
          indicar, en forma expresa y destacada, la posibilidad del titular del
          dato de solicitar el retiro o bloqueo, total o parcial, de su nombre
          de la base de datos. A pedido del interesado, se deberá informar el
          nombre del responsable o usuario del banco de datos que proveyó la
          información”.
        </p>
        <br></br>

        <p>
          La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Órgano de
          Control de la Ley Nº 25.326, tiene la atribución de atender las
          denuncias y reclamos que se interpongan con relación al incumplimiento
          de las normas sobre protección de datos personales.
        </p>
        <br></br>

        <p>
          Los Tickets (en adelante los “Ticket/s”) son vendidos por "A Sala
          Llena Argentina S.A." con domicilio en Cabrera 6061, Piso 7, CPA
          C1414BHM de la Ciudad de Buenos Aires, Nro. de CUIT 33690765549, (en
          adelante “A Sala Llena”) como agente, actuando por cuenta y orden del
          Promotor/Productor/Teatro/Estadio (en adelante el “Organizador”) del
          evento o espectáculo. El Organizador es el único y directo responsable
          del espectáculo o evento a realizarse, sujeto a las condiciones de
          venta del Organizador.
        </p>
        <br></br>

        <p>
          Si la fecha de un evento variara por alguna circunstancia, los Tickets
          serán válidos para la fecha definitiva que fije e informe el
          Organizador. La reprogramación del evento en ningún caso dará derecho
          al consumidor a reclamar la devolución del valor del ticket.
        </p>
        <br></br>

        <p>
          Si un evento es suspendido o cancelado el consumidor tendrá derecho a
          solicitar la devolución del valor del ticket. Todas las devoluciones
          serán responsabilidad del Organizador, pudiendo A Sala Llena colaborar
          en la gestión de dichas devoluciones al consumidor.
        </p>
        <br></br>

        <p>
          El consumidor tiene derecho a revocar la aceptación durante el plazo
          de 10 (diez) días corridos contados a partir de la fecha en que se
          celebre el contrato, sin responsabilidad alguna, salvo que ya hubiese
          utilizado el ticket. Esta facultad no puede ser dispensada ni
          renunciada. Dado que A Sala Llena actúa como intermediario y por
          cuenta y orden del Organizador, cualquier reclamo deberá ser ejercido
          exclusivamente ante el Organizador. Sin perjuicio de ello, A Sala
          Llena, sin asegurar resultado o garantía alguna, podrá ofrecer a su
          exclusivo criterio sus servicios en base a esfuerzos razonables para
          gestionar dichos reclamos. El Organizador se reserva el derecho de
          agregar, modificar o sustituir artistas, variando los programas,
          precios y ubicaciones difundidas, así como la capacidad del auditorio,
          conforme esto sea informado oportunamente. El Organizador se reserva
          el derecho de admisión y permanencia. Las llegadas tarde del público
          implicarán que el ingreso del mismo se efectúe en el intervalo o
          cuando el Organizador lo considere oportuno a su exclusivo criterio.
          Antes de ingresar al evento, los espectadores podrán ser sometidos a
          un chequeo por parte del personal de seguridad, impidiéndose la
          entrada a quien se niegue a recibirlo, no acarreando esto ninguna
          responsabilidad o consecuencia para el Organizador.
        </p>
        <br></br>

        <p>
          No será permitido el ingreso al evento con pirotecnia, grabadoras,
          filmadoras, cámaras de fotografía y de video, ni cualquier elemento
          similar a los mencionados a criterio del Organizador, pudiendo los
          mismos ser retirados del lugar y destruido su contenido. El
          Organizador podrá solicitar que se apague todo equipo de radio llamada
          o teléfono celular antes del acceso al evento.
        </p>
        <br></br>

        <p>
          El sistema A Sala Llena-Online permite a los clientes adquirir tickets
          a través de Internet u otros medios digitales similares. El sistema
          selecciona el mejor lugar disponible al momento de realizar su compra,
          de acuerdo al nivel de precio solicitado.
        </p>
        <br></br>

        <p>
          Los Tickets también podrán ser adquiridos por el consumidor en las
          boleterías que el Organizador habilite para cada evento, sin cargos
          por servicio y entrega a domicilio. Cada ticket comprado a través del
          Centro de Atención Telefónica, Puntos de Venta A Sala Llena y/o de A
          Sala Llena-Online, se encuentra sujeta a un cargo por servicio
          adicional del precio del ticket(los cuales se informan en la lista de
          precios para cada evento).
        </p>
        <br></br>

        <p>
          Toda compra realizada a través del sistema A Sala Llena permite al
          usuario optar entre distintas alternativas de entrega de los Tickets
          (en locales, en la boletería del evento o espectáculo, envío a
          domicilio); algunas de las cuales están sujetas a un cargo adicional
          que será informado por A Sala Llena a través de los distintos medios
          de contacto con el adquirente. Los cargos por servicio (incluyendo
          cargos adicionales por envío a domicilio) que hubieren sido
          efectivamente prestados por A Sala Llena no serán en ningún caso
          devueltos al consumidor, ni aún en caso de suspensión, cancelación o
          reprogramación del evento.
        </p>
        <br></br>

        <p>
          El adquirente de Tickets es responsable de chequear, aceptar y
          confirmar los términos y condiciones de su compra previo a realizarla,
          incluyendo sin limitación: (i) la descripción y especificación del
          evento para el cual adquirió los Tickets, (ii) los plazos y
          condiciones de la entrega, (iii) los precios y condiciones de pago,
          (iv) los costos y cargos adicionales. Por ello antes de completar su
          compra, por favor revise cuidadosamente el evento, sección y ubicación
          deseada, ya que una vez confirmada su compra no se permiten cambios,
          reembolsos y/o devoluciones por este motivo.
        </p>
        <br></br>

        <p>
          La confirmación de la compra que usted realiza con su tarjeta de
          crédito o débito está sujeta a la autorización de la empresa emisora
          de ésta.
        </p>
        <br></br>

        <p>
          Las entregas de los Tickets se realizan únicamente dentro del
          territorio de la República Argentina.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
