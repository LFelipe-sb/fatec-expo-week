import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(date) {
  return format(parseISO(date), "dd/mm/yyyy - H:m", {
    locale: ptBR,
  }); 
}