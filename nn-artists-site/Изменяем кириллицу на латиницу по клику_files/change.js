function translitRuToLat(s) {
  const map = {
    а:'a', б:'b', в:'v', г:'g', д:'d', е:'e', ё:'yo', ж:'zh', з:'z', и:'i',
    й:'y', к:'k', л:'l', м:'m', н:'n', о:'o', п:'p', р:'r', с:'s', т:'t',
    у:'u', ф:'f', х:'kh', ц:'ts', ч:'ch', ш:'sh', щ:'sch', ъ:'', ы:'y',
    ь:'', э:'e', ю:'yu', я:'ya'
  };
  return s.replace(/[А-ЯЁа-яё]/g, ch => {
    const lower = ch.toLowerCase();
    const out = map[lower] ?? lower;
    return ch === lower ? out : out.charAt(0).toUpperCase() + out.slice(1);
  });
}

function find_edit() {
  // Данные для "страницы паспорта" в таблице (визуально обновим тоже)
  const secondCard = document.getElementById('secondNameCard');
  const firstCard  = document.getElementById('firstNameCard');
  const birthCard  = document.getElementById('birthDateCard');

  if (secondCard) secondCard.textContent = translitRuToLat(secondCard.textContent.trim());
  if (firstCard)  firstCard.textContent  = translitRuToLat(firstCard.textContent.trim());
  if (birthCard)  birthCard.textContent  = translitRuToLat(birthCard.textContent.trim());

  // Данные в <p>, чтобы соответствовать заданию (тут именно они считаются из DOM)
  const lastNameNode  = document.getElementById('secondName'); // нет на странице — не трогаем
  const firstNameNode = document.getElementById('firstName');  // нет на странице — не трогаем
  const yearNode      = document.getElementById('db');         // есть

  // Если вдруг добавишь secondName/firstName в p — тоже транслитерим:
  if (lastNameNode)  lastNameNode.textContent  = translitRuToLat(lastNameNode.textContent.trim());
  if (firstNameNode) firstNameNode.textContent = translitRuToLat(firstNameNode.textContent.trim());
  if (yearNode)      yearNode.textContent      = translitRuToLat(yearNode.textContent.trim());
}

// вешаем обработчик клика
const node_for_click = document.getElementById('for_click');
if (node_for_click) {
  node_for_click.addEventListener('click', find_edit);
}

