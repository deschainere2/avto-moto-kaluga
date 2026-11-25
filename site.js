const listing = "https://yandex.ru/maps/org/avto_moto/192604298404/";
const destinations = {
  org: listing,
  route: "https://yandex.ru/maps/?rtext=~54.493326%2C36.225371&rtt=auto",
  reviews: listing + "reviews/",
  gallery: listing + "gallery/",
  panorama: listing + "panorama/"
};

for (const link of document.querySelectorAll("[data-map]")) {
  link.href = destinations[link.dataset.map];
  link.target = "_blank";
  link.rel = "noopener";
}

const photos = [
  ["workshop-entrance", "Фасад мастерской с вывеской"],
  ["wheel-balancing", "Мастер у балансировочного станка"],
  ["wheel-repair", "Правка диска в мастерской"],
  ["motorcycle-service", "Мотоцикл на подкате"],
  ["motorcycle-wheel", "Мотоциклетное колесо на станке"],
  ["workshop-exterior", "Въезд в мастерскую"],
  ["alloy-wheel", "Литой диск"],
  ["car-wheel", "Автомобильное колесо"],
  ["motorcycle-outside", "Мотоцикл около мастерской"]
];
const gallery = document.querySelector("#gallery");
const viewer = document.querySelector("#viewer");
const large = document.querySelector("#large");
for (const [file, description] of photos) {
  const image = new Image();
  image.src = "assets/" + file + ".jpg";
  image.alt = description;
  image.loading = "lazy";
  const button = document.createElement("button");
  button.type = "button";
  button.append(image);
  button.addEventListener("click", () => {
    large.src = image.src;
    large.alt = description;
    viewer.showModal();
  });
  gallery.append(button);
}
document.querySelector("#close").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", event => {
  if (event.target === viewer) viewer.close();
});
