import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isActiveBtn: boolean = true;
  ngOnInit(): void {}
  isUseNumbers: boolean = false;
  isUseSymbols: boolean = false;
  isUseCharacters: boolean = false;
  isLengthPwdExist: boolean = false;
  isBlocGeneratedCodeDisplayed: boolean = false;
  lengthPwd: number = 0;
  generatedPassWord: string = '';
  onButtonClick() {
    const numbers: string = '1234567890';
    const chars: string = 'abcdefghijklmnopqrstuvwxyz';
    const symbols: string = '@#&-)_([$%]';
    this.isBlocGeneratedCodeDisplayed = true;
    let stockPasword = '';
    if (this.isUseCharacters) {
      stockPasword += chars;
    }
    if (this.isUseNumbers) {
      stockPasword += numbers;
    }
    if (this.isUseSymbols) {
      stockPasword += symbols;
    }
    let generatedPwd: string = '';
    for (let i = 0; i < this.lengthPwd; i++) {
      let randomIndex = Math.floor(Math.random() * stockPasword.length);
      generatedPwd += stockPasword[randomIndex];
    }
    this.generatedPassWord = generatedPwd;
  }
  onChangeUsesymboles() {
    this.isUseSymbols = !this.isUseSymbols;
  }
  onChangeUseNumbers() {
    this.isUseNumbers = !this.isUseNumbers;
  }
  onChangeUseCharacters() {
    this.isUseCharacters = !this.isUseCharacters;
  }
  onInput(inputValue: string) {
    const length = parseInt(inputValue);
    this.lengthPwd = isNaN(length) ? 0 : length;
  }
}
