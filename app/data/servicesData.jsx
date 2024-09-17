import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFingerprint, faVideo, faCar, faPenToSquare, faCreditCard, faBarcode, faTable } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: <FontAwesomeIcon icon={faWhatsapp}/>,
    title: 'WHATSAPP',
  },
  {
    icon: <FontAwesomeIcon icon={faFingerprint} />,
    title: 'BIO-METRIC',
  },
  {
    icon: <FontAwesomeIcon icon={faVideo} />,
    title: 'VIRTUAL CLASS',
  },
  {
    icon: <FontAwesomeIcon icon={faCar} />,
    title: 'VEHICLE TRACKING',
  },
  {
    icon: <FontAwesomeIcon icon={faPenToSquare} />,
    title: 'E-EXAM',
  },
  {
    icon: <FontAwesomeIcon icon={faCreditCard} />,
    title: 'ONLINE PAYMENT',
  },
  {
    icon: <FontAwesomeIcon icon={faBarcode} />,
    title: 'BARCODE',
  },
  {
    icon: <FontAwesomeIcon icon={faTable} />,
    title: 'TALLY INTEGRATION',
  },
];

export default services;
