class Box {
    constructor(id, gameElement) {
        this.element = document.getElementById(id);
        this.gameElement = gameElement;
        this.mouseX = null;

        // feliratkozás
        gameElement.addEventListener('mousemove', event => {
            this.OnMouseMove(event.clientX);
        });
    }

    OnMouseMove(mouseX) {
        if (mouseX == this.mouseX) {
            return;
        }
        this.mouseX = mouseX;
        this.UpdatePosition();
    }

    UpdatePosition() {
        // számoláshoz szükséges értékek
        let boxWidth = this.element.clientWidth,
            boxHalfWidth = boxWidth / 2,
            gameWidth = this.gameElement.clientWidth,
            elementLeft = this.mouseX - boxHalfWidth;

        // határok betartása
        elementLeft = Math.max(0, elementLeft);
        elementLeft = Math.min(elementLeft, gameWidth - boxWidth);

        // HTML elem bal pozíciójának beállítása
        this.element.style.left = elementLeft + 'px';
    }
}
