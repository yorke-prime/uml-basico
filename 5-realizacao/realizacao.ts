export interface ControleRemoto {
  play(): void;
  pause(): void;
}

export interface ControleSom extends ControleRemoto {
  mudarRadio(): void;
}

export class Bluray {
  pause(): void {}
  play(): void {}
}

export class Som implements ControleSom {
  pause(): void {}
  play(): void {}
  mudarRadio(): void {};
}