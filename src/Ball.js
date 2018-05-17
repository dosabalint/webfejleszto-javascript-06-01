class Ball {
    constructor(gameElement) {
        // paraméterekből beállítás
        this.gameElement = gameElement;

        // labda HTML elem létrehozása
        this.element = document.createElement('div');
        this.element.className = 'ball';

        // játékhoz csatolás
        this.gameElement.appendChild(this.element);

        // pozicionálás
        this.SetBottomDistance(
            this.gameElement.clientHeight -
            this.GetHeight()
        );
        this.SetLeftDistance(this.GetRandomXPosition());

        // zuhanás megkezdése
        this.Fall();
    }

    // zuhanás

    Fall() {
        // validálás
        if (this.GetBottomDistance() <= 0) {
            this.Destroy();
            return;
        }

        // mozgás
        this.SetBottomDistance(
            this.GetBottomDistance() - 1
        );

        // mozgás időzítése
        setTimeout(() => {
            this.Fall();
        }, 5);
    }

    // alsó távolság

    GetBottomDistance() {
        return +this.element.style.bottom.replace('px', '');
    }

    SetBottomDistance(distance) {
        this.element.style.bottom = distance + 'px';
    }

    // bal távolság

    GetLeftDistance() {
        return +this.element.style.left.replace('px', '');
    }

    SetLeftDistance(distance) {
        this.element.style.left = distance + 'px';
    }

    // szélesség és magassaág

    GetWidth() {
        return this.element.clientWidth;
    }

    GetHeight() {
        return this.element.clientHeight;
    }

    // pozicionálás

    GetRandomXPosition() {
        let gameWidth = this.gameElement.clientWidth,
            ballWidth = this.GetWidth();
        return Math.round(Math.random() * (gameWidth - ballWidth));
    }

    Destroy() {
        console.log('destroy');
        this.gameElement.removeChild(this.element);
    }
}