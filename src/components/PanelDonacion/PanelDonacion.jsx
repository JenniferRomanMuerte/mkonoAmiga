import { PAYPAL_URL } from '../../data/contactoData'
import './PanelDonacion.scss'

function PanelDonacion() {
  return (
    <div className="panel-donacion">
      <h2 className="panel-donacion__titulo">Cómo realizar tu donación</h2>
      <div className="panel-donacion__lista">

        <div className="panel-donacion__opcion">
          <span aria-hidden="true">🏦</span>
          <div>
            <strong>Transferencia bancaria</strong>
            <code className="panel-donacion__codigo">ES5900493140952814234364</code>
          </div>
        </div>

        <div className="panel-donacion__opcion">
          <span aria-hidden="true">📱</span>
          <div>
            <strong>Bizum</strong>
            <code className="panel-donacion__codigo">13299</code>
          </div>
        </div>

        <div className="panel-donacion__opcion">
          <span aria-hidden="true">🤝</span>
          <div>
            <strong>Teaming</strong>
            <p>Por solo 1€ al mes</p>
            <a
              href="https://www.teaming.net/mkonoamiga"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--verde btn--sm"
            >
              Ir a Teaming
            </a>
          </div>
        </div>

        <div className="panel-donacion__opcion">
          <span aria-hidden="true">💳</span>
          <div>
            <strong>PayPal</strong>
            <p>Haz tu donativo desde cualquier parte del mundo de forma rápida y segura</p>
            <a
              href={PAYPAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primario btn--sm"
            >
              Donar con PayPal
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PanelDonacion
