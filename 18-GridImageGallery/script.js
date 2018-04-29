const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImg = document.querySelector('img');
const overlayClose = document.querySelector('.close');


function randomNum(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function generateHTML([h, v]) {
  return `
		<div class="item h${h} v${v}">
			<img src="images/${randomNum(12)}.jpg">
			<div class="item__overlay">
				<button>View</button>
			</div>
		</div>
`;
}

function handleClick(e) {
  const src = e.currentTarget.querySelector('img').src;
  overlayImg.src = src;
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}


gallery.innerHTML = Array.from({ length: 50 }, () => [randomNum(4), randomNum(4)]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1]
]).map(generateHTML).join('');


const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));
overlayClose.addEventListener('click', close);