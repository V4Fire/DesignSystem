module.exports = {
  components: {
    bRadioButton: { mods: {} },
    bInput: {
      mods: {
        size: {
          s: {
            placeholderColor: "rgba(108, 117, 125, 1)",
            placeholderStyle: "small",
            horOffset: "7px",
            vertOffset: "14px",
            textHeight: "16px",
            height: "31px",
            textStyle: "small"
          },
          m: {
            placeholderColor: "rgba(108, 117, 125, 1)",
            placeholderStyle: "base",
            horOffset: "10px",
            vertOffset: "14px",
            textHeight: "16px",
            height: "38px",
            textStyle: "base"
          },
          l: {
            placeholderColor: "rgba(108, 117, 125, 1)",
            placeholderStyle: "big",
            horOffset: "12px",
            vertOffset: "14px",
            textHeight: "23px",
            height: "48px",
            textStyle: "big"
          }
        },
        focus: {
          boxShadow: "0px 0px 3px rgba(0, 123, 255, 0.25)",
          border: "1px solid rgba(128, 189, 255, 1)"
        },
        valid: {
          true: {
            style: { border: "1px solid rgba(40, 167, 69, 1)" },
            focus: {
              boxShadow: "0px 0px 3px rgba(40, 167, 69, 0.25)",
              border: "1px solid rgba(40, 167, 69, 1)"
            },
            info: {
              textStyle: "small",
              color: "rgba(40, 167, 69, 1)",
              offset: { top: "4px", left: "0px" }
            },
            icon: {
              name: "ok",
              width: "18px",
              height: "15.34959602355957px",
              color: "rgba(40, 167, 69, 1)",
              offset: { top: "11px", right: "9px" }
            }
          },
          false: {
            style: { border: "1px solid rgba(220, 53, 69, 1)" },
            focus: {
              boxShadow: "0px 0px 3px rgba(220, 53, 69, 0.25)",
              border: "1px solid rgba(220, 53, 69, 1)"
            },
            icon: {
              name: "close",
              width: "12px",
              height: "12px",
              color: "rgba(220, 53, 69, 1)",
              offset: { top: "13px", right: "9px" }
            },
            info: {
              textStyle: "small",
              color: "rgba(220, 53, 69, 1)",
              offset: { top: "4px", left: "0px" }
            }
          }
        },
        readonly: {
          color: "rgba(108, 117, 125, 1)",
          backgroundColor: "rgba(233, 236, 239, 1)",
          borderColor: "rgba(207, 212, 217, 1)"
        },
        preIcon: {
          iconSize: "11px",
          offset: "13px",
          base: {
            backgroundColor: "rgba(233, 236, 239, 1)",
            border: "1px solid rgba(207, 212, 217, 1)"
          }
        },
        postIcon: {
          iconSize: "11px",
          offset: "13px",
          base: {
            backgroundColor: "rgba(233, 236, 239, 1)",
            border: "1px solid rgba(207, 212, 217, 1)"
          }
        }
      },
      block: {
        border: "1px solid rgba(207, 212, 217, 1)",
        backgroundColor: "rgba(255, 255, 255, 1)"
      }
    },
    bCheckbox: {
      mods: {
        focus: {
          checkbox: {
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "1px solid rgba(128, 189, 255, 1)",
            borderRadius: "4px"
          }
        },
        valid: {
          true: {
            style: { border: "1px solid rgba(40, 167, 69, 1)" },
            focus: {
              checkbox: {
                backgroundColor: "rgba(255, 255, 255, 1)",
                border: "1px solid rgba(40, 167, 69, 1)",
                borderRadius: "4px"
              }
            },
            icon: {
              name: "check",
              width: "8px",
              height: "6.5px",
              color: "rgba(255, 255, 255, 1)",
              offset: { top: "4.75px", right: "4px" }
            }
          },
          false: {
            style: { border: "1px solid rgba(220, 53, 69, 1)" },
            focus: {
              checkbox: {
                backgroundColor: "rgba(255, 255, 255, 1)",
                border: "1px solid rgba(220, 53, 69, 1)",
                borderRadius: "4px"
              }
            },
            info: {
              textStyle: "small",
              color: "rgba(220, 53, 69, 1)",
              offset: { top: "6px", left: "24px" }
            }
          }
        },
        disabled: {
          checkbox: {
            backgroundColor: "rgba(248, 249, 250, 1)",
            border: "1px solid rgba(173, 181, 189, 1)",
            borderRadius: "4px"
          },
          label: { color: "rgba(173, 181, 189, 1)" }
        }
      },
      block: {
        checkbox: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "1px solid rgba(173, 181, 189, 1)",
          borderRadius: "4px"
        },
        label: { color: "rgba(33, 37, 41, 1)", marginLeft: "8px" },
        textStyle: "base"
      },
      exterior: { switcher: {} }
    },
    bCalendar: { mods: {} },
    bButton: {
      mods: {
        active: {
          blendMode: "color-burn",
          backgroundColor: "rgba(164, 164, 164, 1)"
        },
        hover: {
          blendMode: "color-burn",
          opacity: 0.9,
          backgroundColor: "rgba(186, 186, 186, 0.9)"
        },
        focus: {
          blendMode: "color-burn",
          opacity: 0.9,
          backgroundColor: "rgba(186, 186, 186, 0.9)"
        },
        disabled: {
          blendMode: "normal",
          opacity: 0.42,
          backgroundColor: "rgba(255, 255, 255, 0.42)"
        },
        preIcon: { iconSize: "12px", offset: "4px" },
        postIcon: { iconSize: "12px", offset: "4px" },
        size: {
          m: {
            horOffset: "11px",
            vertOffset: "8px",
            textHeight: "17px",
            height: "38px",
            textStyle: "base"
          },
          s: {
            horOffset: "11px",
            vertOffset: "8px",
            textHeight: "10px",
            height: "31px",
            textStyle: "small"
          },
          l: {
            horOffset: "11px",
            vertOffset: "8px",
            textHeight: "27px",
            height: "48px",
            textStyle: "big"
          }
        }
      },
      exterior: {
        dark: {
          backgroundColor: "rgba(52, 58, 64, 1)",
          color: "rgba(255, 255, 255, 1)",
          active: {
            blendMode: "color-burn",
            backgroundColor: "rgba(164, 164, 164, 1)"
          },
          hover: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          focus: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          disabled: {
            blendMode: "normal",
            opacity: 0.42,
            backgroundColor: "rgba(255, 255, 255, 0.42)"
          },
          preIcon: { iconSize: "12px", offset: "4px" },
          postIcon: { iconSize: "12px", offset: "4px" }
        },
        light: {
          backgroundColor: "rgba(248, 249, 250, 1)",
          color: "rgba(33, 37, 41, 1)",
          active: {
            blendMode: "color-burn",
            backgroundColor: "rgba(164, 164, 164, 1)"
          },
          hover: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          focus: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          disabled: {
            blendMode: "normal",
            opacity: 0.42,
            backgroundColor: "rgba(255, 255, 255, 0.42)"
          },
          preIcon: { iconSize: "12px", offset: "4px" },
          postIcon: { iconSize: "12px", offset: "4px" }
        },
        info: {
          backgroundColor: "rgba(23, 162, 184, 1)",
          color: "rgba(255, 255, 255, 1)",
          active: {
            blendMode: "color-burn",
            backgroundColor: "rgba(164, 164, 164, 1)"
          },
          hover: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          focus: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          disabled: {
            blendMode: "normal",
            opacity: 0.42,
            backgroundColor: "rgba(255, 255, 255, 0.42)"
          },
          preIcon: { iconSize: "12px", offset: "4px" },
          postIcon: { iconSize: "12px", offset: "4px" }
        },
        warning: {
          backgroundColor: "rgba(255, 193, 7, 1)",
          color: "rgba(33, 37, 41, 1)",
          active: {
            blendMode: "color-burn",
            backgroundColor: "rgba(164, 164, 164, 1)"
          },
          hover: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          focus: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          disabled: {
            blendMode: "normal",
            opacity: 0.42,
            backgroundColor: "rgba(255, 255, 255, 0.42)"
          },
          preIcon: { iconSize: "12px", offset: "4px" },
          postIcon: { iconSize: "12px", offset: "4px" }
        },
        danger: {
          backgroundColor: "rgba(220, 53, 69, 1)",
          color: "rgba(255, 255, 255, 1)",
          active: {
            blendMode: "color-burn",
            backgroundColor: "rgba(164, 164, 164, 1)"
          },
          hover: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          focus: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          disabled: {
            blendMode: "normal",
            opacity: 0.42,
            backgroundColor: "rgba(255, 255, 255, 0.42)"
          },
          preIcon: { iconSize: "12px", offset: "4px" },
          postIcon: { iconSize: "12px", offset: "4px" }
        },
        success: {
          backgroundColor: "rgba(40, 167, 69, 1)",
          color: "rgba(255, 255, 255, 1)",
          active: {
            blendMode: "color-burn",
            backgroundColor: "rgba(164, 164, 164, 1)"
          },
          hover: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          focus: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          disabled: {
            blendMode: "normal",
            opacity: 0.42,
            backgroundColor: "rgba(255, 255, 255, 0.42)"
          },
          preIcon: { iconSize: "12px", offset: "4px" },
          postIcon: { iconSize: "12px", offset: "4px" }
        },
        secondary: {
          backgroundColor: "rgba(108, 117, 125, 1)",
          color: "rgba(255, 255, 255, 1)",
          active: {
            blendMode: "color-burn",
            backgroundColor: "rgba(164, 164, 164, 1)"
          },
          hover: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          focus: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          disabled: {
            blendMode: "normal",
            opacity: 0.42,
            backgroundColor: "rgba(255, 255, 255, 0.42)"
          },
          preIcon: { iconSize: "12px", offset: "4px" },
          postIcon: { iconSize: "12px", offset: "4px" }
        },
        primary: {
          backgroundColor: "rgba(0, 83, 172, 1)",
          color: "rgba(255, 255, 255, 1)",
          active: {
            blendMode: "color-burn",
            backgroundColor: "rgba(164, 164, 164, 1)"
          },
          hover: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          focus: {
            blendMode: "color-burn",
            opacity: 0.9,
            backgroundColor: "rgba(186, 186, 186, 0.9)"
          },
          disabled: {
            blendMode: "normal",
            opacity: 0.42,
            backgroundColor: "rgba(255, 255, 255, 0.42)"
          },
          preIcon: { iconSize: "12px", offset: "4px" },
          postIcon: { iconSize: "12px", offset: "4px" }
        }
      }
    }
  },
  colors: {
    yellow: ["rgba(255, 193, 7, 1)"],
    blue: [
      "rgba(0, 83, 172, 1)",
      "rgba(23, 162, 184, 1)",
      "rgba(128, 189, 255, 1)"
    ],
    red: ["rgba(220, 53, 69, 1)"],
    green: ["rgba(40, 167, 69, 1)"],
    white: ["rgba(255, 255, 255, 1)"],
    grey: [
      "rgba(33, 37, 41, 1)",
      "rgba(52, 58, 64, 1)",
      "rgba(108, 117, 125, 1)",
      "rgba(248, 249, 250, 1)",
      "rgba(207, 212, 217, 1)",
      "rgba(233, 236, 239, 1)",
      "rgba(173, 181, 189, 1)"
    ]
  },
  text: {
    heading: [
      null,
      {
        type: "TEXT",
        name: "Heading/1",
        style: {
          fontFamily: "Roboto",
          fontWeight: 300,
          fontSize: "40px",
          lineHeight: "47px"
        }
      },
      {
        type: "TEXT",
        name: "Heading/2",
        style: {
          fontFamily: "Roboto",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "38px"
        }
      },
      {
        type: "TEXT",
        name: "Heading/3",
        style: {
          fontFamily: "Roboto",
          fontWeight: 500,
          fontSize: "28px",
          lineHeight: "33px"
        }
      },
      {
        type: "TEXT",
        name: "Heading/4",
        style: {
          fontFamily: "Roboto",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "28px"
        }
      },
      {
        type: "TEXT",
        name: "Heading/5",
        style: {
          fontFamily: "Roboto",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "23px"
        }
      },
      {
        type: "TEXT",
        name: "Heading/6",
        style: {
          fontFamily: "Roboto",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "19px"
        }
      }
    ],
    base: {
      type: "TEXT",
      name: "Base",
      style: {
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "16px"
      }
    },
    small: {
      type: "TEXT",
      name: "Small",
      style: {
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "16px"
      }
    },
    big: {
      type: "TEXT",
      name: "Big",
      style: {
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "23px"
      }
    },
    link: {
      type: "TEXT",
      name: "Link",
      style: {
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: "16px",
        textDecoration: "underline",
        lineHeight: "19px"
      }
    }
  },
  rounding: { big: "10px", small: "4px" }
};
