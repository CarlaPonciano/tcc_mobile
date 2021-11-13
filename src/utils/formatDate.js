import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

module.exports = {
    formatDate (date) {
        return (moment(date).format('LL'));
    }
}