const d = document
//!fail
export default function slide(
  querySelectorSlider,
  imgTag,
  nextBtnId,
  previousBtnId,
  ...imgs
) {
  const carousel = d.querySelector(querySelectorSlider)
  let img = carousel.querySelector(imgTag)
  img.src = imgs[0]
  console.log(img.src)
}
