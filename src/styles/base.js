import { createGlobalStyle } from "styled-components"

const baseFontFamily =  `'Noto Sans KR', 'Open Sans', sans-serif`;
const baseFontSize =    `18px`;
const smallFontSize =   `${baseFontSize * 0.875}`;
const baselineHeight =  `2.0`;

const spacingUnit =     `30px`;

const textColor =       `#D3D3D3`;
const linkText =        `#747882`;
const linkHover =	    `#FAAA5E`;
const siteColor =       `#282828`;
const backgroundColor = `#282828`;

const greyColor =       `#828282`;
const greyColorLight =  `#afafaf`; //lighten($grey-color, 40%);
const greyColorDark =   `darken(${greyColor}, 25%)`;

// Width of the content area
const contentWidth =    `640px`;
const portpolioWidth =  `800px`;

const onPalm =          `600px`;
const onLaptop =        `800px`;

export default createGlobalStyle`

  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
 
html {
    background-color: ${siteColor}
}

  /**
  * Reset some basic elements
  */
  body, h1, h2, h3, h4, h5, h6,
  p, blockquote, pre, hr,
  dl, dd, ol, ul, figure {
      margin: 0;
      padding: 0;
  }

  /**
  * Basic styling
  */
  body {
      font-family: ${baseFontFamily};
      font-size: ${baseFontSize};
      line-height: ${baselineHeight};
      /* font-weight: 300; */
      color: ${textColor};
      background-color: ${backgroundColor};
      -webkit-text-size-adjust: 100%;
  }



  /**
  * Set margin-bottom to maintain vertical rhythm
  */
  h1, h2, h3, h4, h5, h6,
  p, blockquote, pre,
  ul, ol, dl, figure,
  %vertical-rhythm {
      margin-bottom: ${spacingUnit} / 2;
  }



  /**
  * Images
  */
  img {
      max-width: 100%;
      vertical-align: middle;
  }



  /**
  * Figures
  */
  figure > img {
      display: block;
  }

  figcaption {
      font-size: ${smallFontSize};
  }



  /**
  * Lists
  */
  ul, ol {
      margin-left: ${spacingUnit};
  }

  li {
      > ul,
      > ol {
          margin-bottom: 0;
      }
  }

  /**
  * Headings
  */
  h1, h2, h3, h4, h5, h6 {
      font-weight: 300;
  }

  /**
  * Links
  */
  a {
    text-decoration: none;
    color: ${linkText};

    &:hover {
        color: ${linkHover};
    }      
  }

  /**
  * Blockquotes
  */
  blockquote {
      color: ${greyColor};
      border-left: 4px solid ${greyColorLight};
      padding-left: ${spacingUnit} / 2;
      font-size: 18px;
      letter-spacing: -1px;
      font-style: italic;

      > :last-child {
          margin-bottom: 0;
      }
  }



  /**
  * Code formatting
  */
  pre,
  code {
      font-size: 15px;
      border: 1px solid ${greyColorLight};
      border-radius: 3px;
  }

  code {
      padding: 1px 5px;
  }

  pre {
      padding: 8px 12px;
      overflow-x: scroll;

      > code {
          border: 0;
          padding-right: 0;
          padding-left: 0;
      }
  }

  a:not([href]) {
    color: inherit;
    text-decoration: none;
    }

    blockquote,
    dl,
    ol,
    p,
    pre,
    table,
    ul {
    margin-bottom: 16px;
    margin-top: 0;
    }

    hr {
    background-color: #e1e4e8;
    border: 0;
    height: .25em;
    margin: 24px 0;
    padding: 0;
    }

    blockquote {
    border-left: .25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
    }

    blockquote>:first-child {
    margin-top: 0;
    }

    blockquote>:last-child {
    margin-bottom: 0;
    }

    kbd {
    background-color: #fafbfc;
    border: 1px solid #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
    color: #444d56;
    display: inline-block;
    font-size: 11px;
    line-height: 10px;
    padding: 3px 5px;
    vertical-align: middle;
    }

    h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 16px;
    margin-top: 24px;
    }

    h1 {
    font-size: 2em;
    }

    h1, h2 {
    border-bottom: 1px solid #eaecef;
    padding-bottom: .3em;
    }

    h2 {
    font-size: 1.5em;
    }

    h3 {
    font-size: 1.25em;
    }

    h4 {
    font-size: 1em;
    }

    h5 {
    font-size: .875em;
    }

    h6 {
    color: #6a737d;
    font-size: .85em;
    }

    h1 {
    padding-top: 20px;
    font-size: 2em;
    margin: .67em 0;
    }
    h2 {
        font-size: 30px;

        @include media-query(${onLaptop}) {
            font-size: 28px;
        }
    }

    h3 {
        font-size: 26px;

        @include media-query(${onLaptop}) {
            font-size: 22px;
        }
    }

    h4 {
        font-size: 20px;

        @include media-query(${onLaptop}) {
            font-size: 18px;
        }
    }

    hr {
    border: none;
    border-top: 1px solid ${greyColor};
    margin-top: 30px;
    }

    p {
    margin: 20px 0;
    }

    ol,
    ul {
    padding-left: 2em;
    }

    ol ol,
    ol ul,
    ul ol,
    ul ul {
    margin-bottom: 0;
    margin-top: 0;
    }

    li {
    word-wrap: break-all;
    }

    li>p {
    margin-top: 16px;
    }

    li+li {
    margin-top: .25em;
    }

    dl {
    padding: 0;
    }

    dl dt {
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
    margin-top: 16px;
    padding: 0;
    }

    dl dd {
    margin-bottom: 16px;
    padding: 0 16px;
    }

    table {
    display: block;
    overflow: auto;
    width: 100%;
    }

    table th {
    font-weight: 600;
    }

    table td,
    table th {
    border: 1px solid #dfe2e5;
    padding: 6px 13px;
    }

    table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
    }

    table tr:nth-child(2n) {
    background-color: #f6f8fa;
    }

    img {
    background-color: #fff;
    box-sizing: content-box;
    max-width: 100%;
    }

    img[align=right] {
    padding-left: 20px;
    }

    img[align=left] {
    padding-right: 20px;
    }

    code {
    background-color: rgba(27,31,35,.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: .2em .4em;
    }

    pre {
    word-wrap: normal;
    }

    pre>code {
    background: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
    white-space: pre;
    word-break: normal;
    }
`