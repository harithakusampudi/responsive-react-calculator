export const jsonForKeyPad = {
  basic: [
    [{ ac: "AC" }, { "±": "+/-" }, { "%": "%" }, { "/": "÷" }],
    [{ "7": "7" }, { "8": "8" }, { "9": "9" }, { "*": "x" }],
    [{ "4": "4" }, { "5": "5" }, { "6": "6" }, { "-": "-" }],
    [{ "1": "1" }, { "2": "2" }, { "3": "3" }, { "+": "+" }],
    [{ "0": "0" }, { ".": "." }, { "=": "=" }]
  ],
  scientific: [
    [
      { "(": "(" },
      { ")": ")" },
      { mc: "mc" },
      { "m+": "m+" },
      { "m-": "m-" },
      { mr: "mr" }
    ],
    [
      { "2⁽ⁿᵈ⁾": "2⁽ⁿᵈ⁾" },
      { "x⁽²⁾": "x⁽²⁾" },
      { "x⁽³⁾": "x⁽³⁾" },
      { "x⁽ʸ⁾": "x⁽ʸ⁾" },
      { "e⁽ˣ⁾": "e⁽ˣ⁾" },
      { "10⁽ˣ⁾": "10⁽ˣ⁾" }
    ],
    [
      { "1/x": "1/x" },
      { "2x": "2x" },
      { "3x": "3x" },
      { yx: "yx" },
      { In: "In" },
      { "log₍₁o₎": "log₍₁o₎" }
    ],
    [
      { "x!": "x!" },
      { sin: "sin" },
      { cos: "cos" },
      { tan: "tan" },
      { e: "e" },
      { EE: "EE" }
    ],
    [
      { Rad: "Rad" },
      { sinh: "sinh" },
      { cosh: "cosh" },
      { tanh: "tanh" },
      { π: "π" },
      { Rand: "Rand" }
    ]
  ]
};

export enum KEY_PAD_TYPES {
  SCIENTIFIC = "SCIENTIFIC",
  BASIC = "BASIC"
}

export const keyColors = {
  lightGrey: "#8c8c8c",
  black: "#595959",
  orange: "#fa8c16"
};
