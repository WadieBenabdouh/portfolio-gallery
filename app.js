const slider = document.querySelector(".images")
const backward = document.querySelector("#arrow-left")
const forward = document.querySelector("#arrow-right")

const translate = {
    value: 0,
    backward() {
        this.value = this.value >= 40 ? 40 : this.value + 20;
        slider.style.transform = `translateX(${this.value}%)`;
    },
    forward() {
        this.value = this.value <= -40 ? -40 : this.value - 20;
        slider.style.transform = `translateX(${this.value}%)`;
    }
}

forward.addEventListener('click', () => {
    translate.forward()
});
backward.addEventListener('click', () => {
    translate.backward()
});