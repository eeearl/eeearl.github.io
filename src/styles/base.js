import { injectGlobal } from "react-emotion"

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

injectGlobal`

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



  /**
  * Wrapper
  */
  .wrapper {
      max-width: -webkit-calc(${contentWidth} - (${spacingUnit} * 2));
      max-width:         calc(${contentWidth} - (${spacingUnit} * 2));
      margin-right: auto;
      margin-left: auto;
      padding-right: ${spacingUnit};
      padding-left: ${spacingUnit};
      @extend %clearfix;

      @include media-query(${onLaptop}) {
          max-width: -webkit-calc(${contentWidth}} - (${spacingUnit}));
          max-width:         calc(${contentWidth}} - (${spacingUnit}));
          padding-right: ${spacingUnit} / 2;
          padding-left: ${spacingUnit} / 2;
      }
  }

  /**
  * Icons
  */
  .icon {

      > svg {
          display: inline-block;
          width: 16px;
          height: 16px;
          vertical-align: middle;

          path {
              fill: $grey-color;
          }
      }
  }
`