import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const baseFontSize = `18px`;
const smallFontSize = `${baseFontSize * 0.875}`;

const spacingUnit = `30px`;

const greyColor = `#828282`;
const greyColorLight = `#afafaf`; //lighten($grey-color, 40%);
const greyColorDark = `darken(${greyColor}, 25%)`;

// const onPalm = `600px`;
const onLaptop = `800px`;

export const siteHeader = styled.div`
  // border-top: 5px solid ${greyColorDark};
  //border-bottom: 1px solid ${greyColorLight};
  min-height: 56px;

  // Positioning context for the mobile navigation icon
  position: relative;
`

export const siteTitle = styled.div`
    font-size: 26px;
    line-height: 56px;
    letter-spacing: -1px;
    margin-bottom: 0;
    float: left;

    &,
    &:visited {
        color: ${greyColorDark};
    }
`

export const siteFooter = styled.div`
      border-top: 1px solid ${greyColorLight};
      padding: ${spacingUnit} 0;
  `

export const footerHeading = styled.div`
  font-size: 18px;
  margin-bottom: ${spacingUnit} / 2;
`

export default createGlobalStyle`
      

      /**
      * Site footer
      */
      

      

      .contact-list,
      .social-media-list {
          list-style: none;
          margin-left: 0;
      }

      .rss-subscribe {
        text-align: right;
      }

      .footer-col-wrapper {
          font-size: ${baseFontSize} - 3;
          color: ${greyColor};
          margin-left: -${spacingUnit} / 2;
          @extend %clearfix;
      }

      .footer-col {
          float: left;
          margin-bottom: ${spacingUnit} / 2;
          padding-left: ${spacingUnit} / 2;
      }

      .footer-col-1 {
          width: -webkit-calc(35% - (#{${spacingUnit}} / 2));
          width:         calc(35% - (#{${spacingUnit}} / 2));
      }

      .footer-col-2 {
          width: -webkit-calc(20% - (#{${spacingUnit}} / 2));
          width:         calc(20% - (#{${spacingUnit}} / 2));
      }

      .footer-col-3 {
          width: -webkit-calc(45% - (#{${spacingUnit}} / 2));
          width:         calc(45% - (#{${spacingUnit}} / 2));
      }

      @include media-query(${onLaptop}) {
          .footer-col-1,
          .footer-col-2 {
              width: -webkit-calc(50% - (#{${spacingUnit}} / 2));
              width:         calc(50% - (#{${spacingUnit}} / 2));
          }

          .footer-col-3 {
              width: -webkit-calc(100% - (#{${spacingUnit}} / 2));
              width:         calc(100% - (#{${spacingUnit}} / 2));
          }
      }

      @include media-query($on-palm) {
          .footer-col {
              float: none;
              width: -webkit-calc(100% - (#{${spacingUnit}} / 2));
              width:         calc(100% - (#{${spacingUnit}} / 2));
          }
      }



      /**
      * Page content
      */
      .page-content {
          padding: ${spacingUnit} 0;
      }

      .page-heading {
          font-size: 18px;
          font-weight: bold;
      }

      .post-list {
          margin-left: 0;
          list-style: none;

          > li {
              margin-bottom: 0; /*${spacingUnit};*/
          }
      }

      .archive-group {
          margin-left: 0;
          list-style: none;

          > li {
              margin-bottom: 0; /*${spacingUnit};*/
          }
      }

      .post-meta {
          font-size: ${smallFontSize};
          color: ${greyColor};
          float: right;
          font-size: 0.8em;
      }

      .post-link {
      /*
          display: block;
          font-size: 24px;
      */
          font-size: 0.88em;
          font-weight: 400;
      }

      .post-desc {
          margin: 0 0 10px 14px;
          font-size: 0.76em;
          color: #999;
          font-weight: 300;
      }


      /**
      * Posts
      */
      .post-header {
          .post-meta {
              font-size: ${smallFontSize};
              color: ${greyColor};
              float: none;
          }
          margin-bottom: ${spacingUnit};
      }

      .post-title {
          font-size: 42px;
          letter-spacing: -1px;
          line-height: 1;

          @include media-query(${onLaptop}) {
              font-size: 36px;
          }
      }

      .post-content {
        margin-bottom: ${spacingUnit};
        font-size: 16px;


        .octicon {
          display: inline-block;
          fill: currentColor;
          vertical-align: text-bottom;
        }

        .anchor {
          float: left;
          line-height: 1;
          margin-left: -20px;
          padding-right: 4px;
        }

        .anchor:focus {
          outline: none;
        }

        h1 .octicon-link,
        h2 .octicon-link,
        h3 .octicon-link,
        h4 .octicon-link,
        h5 .octicon-link,
        h6 .octicon-link {
          color: #1b1f23;
          vertical-align: middle;
          visibility: hidden;
        }

        h1:hover .anchor,
        h2:hover .anchor,
        h3:hover .anchor,
        h4:hover .anchor,
        h5:hover .anchor,
        h6:hover .anchor {
          text-decoration: none;
        }

        h1:hover .anchor .octicon-link,
        h2:hover .anchor .octicon-link,
        h3:hover .anchor .octicon-link,
        h4:hover .anchor .octicon-link,
        h5:hover .anchor .octicon-link,
        h6:hover .anchor .octicon-link {
          visibility: visible;
        }

        {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          color: #24292e;
          line-height: 1.5;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
          font-size: 16px;
          line-height: 1.5;
          word-wrap: break-word;
        }

        .pl-c {
          color: #6a737d;
        }

        .pl-c1,
        .pl-s .pl-v {
          color: #005cc5;
        }

        .pl-e,
        .pl-en {
          color: #6f42c1;
        }

        .pl-s .pl-s1,
        .pl-smi {
          color: #24292e;
        }

        .pl-ent {
          color: #22863a;
        }

        .pl-k {
          color: #d73a49;
        }

        .pl-pds,
        .pl-s,
        .pl-s .pl-pse .pl-s1,
        .pl-sr,
        .pl-sr .pl-cce,
        .pl-sr .pl-sra,
        .pl-sr .pl-sre {
          color: #032f62;
        }

        .pl-smw,
        .pl-v {
          color: #e36209;
        }

        .pl-bu {
          color: #b31d28;
        }

        .pl-ii {
          background-color: #b31d28;
          color: #fafbfc;
        }

        .pl-c2 {
          background-color: #d73a49;
          color: #fafbfc;
        }

        .pl-c2:before {
          content: "^M";
        }

        .pl-sr .pl-cce {
          color: #22863a;
          font-weight: 700;
        }

        .pl-ml {
          color: #735c0f;
        }

        .pl-mh,
        .pl-mh .pl-en,
        .pl-ms {
          color: #005cc5;
          font-weight: 700;
        }

        .pl-mi {
          color: #24292e;
          font-style: italic;
        }

        .pl-mb {
          color: #24292e;
          font-weight: 700;
        }

        .pl-md {
          background-color: #ffeef0;
          color: #b31d28;
        }

        .pl-mi1 {
          background-color: #f0fff4;
          color: #22863a;
        }

        .pl-mc {
          background-color: #ffebda;
          color: #e36209;
        }

        .pl-mi2 {
          background-color: #005cc5;
          color: #f6f8fa;
        }

        .pl-mdr {
          color: #6f42c1;
          font-weight: 700;
        }

        .pl-ba {
          color: #586069;
        }

        .pl-sg {
          color: #959da5;
        }

        .pl-corl {
          color: #032f62;
          text-decoration: underline;
        }

        details {
          display: block;
        }

        summary {
          display: list-item;
        }

        a {
          background-color: transparent;
        }

        a:active,
        a:hover {
          outline-width: 0;
        }

        strong {
          font-weight: inherit;
          font-weight: bolder;
        }

        h1 {
          font-size: 2em;
          margin: .67em 0;
        }

        img {
          border-style: none;
        }

        code,
        kbd,
        pre {
          font-family: monospace,monospace;
          font-size: 1em;
        }

        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }

        input {
          font: inherit;
          margin: 0;
        }

        input {
          overflow: visible;
        }

        [type=checkbox] {
          box-sizing: border-box;
          padding: 0;
        }

        * {
          box-sizing: border-box;
        }

        input {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }

        a {
          color: #0366d6;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        strong {
          font-weight: 600;
        }

        hr {
          background: transparent;
          border: 0;
          border-bottom: 1px solid #dfe2e5;
          height: 0;
          margin: 15px 0;
          overflow: hidden;
        }

        hr:before {
          content: "";
          display: table;
        }

        hr:after {
          clear: both;
          content: "";
          display: table;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        td,
        th {
          padding: 0;
        }

        details summary {
          cursor: pointer;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-bottom: 0;
          margin-top: 0;
        }

        h1 {
          font-size: 32px;
        }

        h1,
        h2 {
          font-weight: 600;
        }

        h2 {
          font-size: 24px;
        }

        h3 {
          font-size: 20px;
        }

        h3,
        h4 {
          font-weight: 600;
        }

        h4 {
          font-size: 16px;
        }

        h5 {
          font-size: 14px;
        }

        h5,
        h6 {
          font-weight: 600;
        }

        h6 {
          font-size: 12px;
        }

        p {
          margin-bottom: 10px;
          margin-top: 0;
        }

        blockquote {
          margin: 0;
        }

        ol,
        ul {
          margin-bottom: 0;
          margin-top: 0;
          padding-left: 0;
        }

        ol ol,
        ul ol {
          list-style-type: lower-roman;
        }

        ol ol ol,
        ol ul ol,
        ul ol ol,
        ul ul ol {
          list-style-type: lower-alpha;
        }

        dd {
          margin-left: 0;
        }

        code,
        pre {
          font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
          font-size: 12px;
        }

        pre {
          margin-bottom: 0;
          margin-top: 0;
        }

        input::-webkit-inner-spin-button,
        input::-webkit-outer-spin-button {
          -webkit-appearance: none;
          appearance: none;
          margin: 0;
        }

        .border {
          border: 1px solid #e1e4e8!important;
        }

        .border-0 {
          border: 0!important;
        }

        .border-bottom {
          border-bottom: 1px solid #e1e4e8!important;
        }

        .rounded-1 {
          border-radius: 3px!important;
        }

        .bg-white {
          background-color: #fff!important;
        }

        .bg-gray-light {
          background-color: #fafbfc!important;
        }

        .text-gray-light {
          color: #6a737d!important;
        }

        .mb-0 {
          margin-bottom: 0!important;
        }

        .my-2 {
          margin-bottom: 8px!important;
          margin-top: 8px!important;
        }

        .pl-0 {
          padding-left: 0!important;
        }

        .py-0 {
          padding-bottom: 0!important;
          padding-top: 0!important;
        }

        .pl-1 {
          padding-left: 4px!important;
        }

        .pl-2 {
          padding-left: 8px!important;
        }

        .py-2 {
          padding-bottom: 8px!important;
          padding-top: 8px!important;
        }

        .pl-3,
        .px-3 {
          padding-left: 16px!important;
        }

        .px-3 {
          padding-right: 16px!important;
        }

        .pl-4 {
          padding-left: 24px!important;
        }

        .pl-5 {
          padding-left: 32px!important;
        }

        .pl-6 {
          padding-left: 40px!important;
        }

        .f6 {
          font-size: 12px!important;
        }

        .lh-condensed {
          line-height: 1.25!important;
        }

        .text-bold {
          font-weight: 600!important;
        }

        .markdown-body:before {
          content: "";
          display: table;
        }

        .markdown-body:after {
          clear: both;
          content: "";
          display: table;
        }

        .markdown-body>:first-child {
          margin-top: 0!important;
        }

        .markdown-body>:last-child {
          margin-bottom: 0!important;
        }

        

        .highlight {
          margin-bottom: 16px;
        }

        .highlight pre {
          margin-bottom: 0;
          word-break: normal;
        }

        .highlight pre,
        pre {
          background-color: #f6f8fa;
          border-radius: 3px;
          font-size: 85%;
          line-height: 1.45;
          overflow: auto;
          padding: 16px;
        }

        pre code {
          background-color: transparent;
          border: 0;
          display: inline;
          line-height: inherit;
          margin: 0;
          max-width: auto;
          overflow: visible;
          padding: 0;
          word-wrap: normal;
        }

        .commit-tease-sha {
          color: #444d56;
          display: inline-block;
          font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
          font-size: 90%;
        }

        .blob-wrapper {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          overflow-x: auto;
          overflow-y: hidden;
        }

        .blob-wrapper-embedded {
          max-height: 240px;
          overflow-y: auto;
        }

        .blob-num {
          -moz-user-select: none;
          -ms-user-select: none;
          -webkit-user-select: none;
          color: rgba(27,31,35,.3);
          cursor: pointer;
          font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
          font-size: 12px;
          line-height: 20px;
          min-width: 50px;
          padding-left: 10px;
          padding-right: 10px;
          text-align: right;
          user-select: none;
          vertical-align: top;
          white-space: nowrap;
          width: 1%;
        }

        .blob-num:hover {
          color: rgba(27,31,35,.6);
        }

        .blob-num:before {
          content: attr(data-line-number);
        }

        .blob-code {
          line-height: 20px;
          padding-left: 10px;
          padding-right: 10px;
          position: relative;
          vertical-align: top;
        }

        .blob-code-inner {
          color: #24292e;
          font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
          font-size: 12px;
          overflow: visible;
          white-space: pre;
          word-wrap: normal;
        }

        .pl-token.active,
        .pl-token:hover {
          background: #ffea7f;
          cursor: pointer;
        }

        kbd {
          background-color: #fafbfc;
          border: 1px solid #d1d5da;
          border-bottom-color: #c6cbd1;
          border-radius: 3px;
          box-shadow: inset 0 -1px 0 #c6cbd1;
          color: #444d56;
          display: inline-block;
          font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
          line-height: 10px;
          padding: 3px 5px;
          vertical-align: middle;
        }

        :checked+.radio-label {
          border-color: #0366d6;
          position: relative;
          z-index: 1;
        }

        .tab-size[data-tab-size="1"] {
          -moz-tab-size: 1;
          tab-size: 1;
        }

        .tab-size[data-tab-size="2"] {
          -moz-tab-size: 2;
          tab-size: 2;
        }

        .tab-size[data-tab-size="3"] {
          -moz-tab-size: 3;
          tab-size: 3;
        }

        .tab-size[data-tab-size="4"] {
          -moz-tab-size: 4;
          tab-size: 4;
        }

        .tab-size[data-tab-size="5"] {
          -moz-tab-size: 5;
          tab-size: 5;
        }

        .tab-size[data-tab-size="6"] {
          -moz-tab-size: 6;
          tab-size: 6;
        }

        .tab-size[data-tab-size="7"] {
          -moz-tab-size: 7;
          tab-size: 7;
        }

        .tab-size[data-tab-size="8"] {
          -moz-tab-size: 8;
          tab-size: 8;
        }

        .tab-size[data-tab-size="9"] {
          -moz-tab-size: 9;
          tab-size: 9;
        }

        .tab-size[data-tab-size="10"] {
          -moz-tab-size: 10;
          tab-size: 10;
        }

        .tab-size[data-tab-size="11"] {
          -moz-tab-size: 11;
          tab-size: 11;
        }

        .tab-size[data-tab-size="12"] {
          -moz-tab-size: 12;
          tab-size: 12;
        }

        .task-list-item {
          list-style-type: none;
        }

        .task-list-item+.task-list-item {
          margin-top: 3px;
        }

        .task-list-item input {
          margin: 0 .2em .25em -1.6em;
          vertical-align: middle;
        }

        hr {
          border-bottom-color: #eee;
        }

        .pl-0 {
          padding-left: 0!important;
        }

        .pl-1 {
          padding-left: 4px!important;
        }

        .pl-2 {
          padding-left: 8px!important;
        }

        .pl-3 {
          padding-left: 16px!important;
        }

        .pl-4 {
          padding-left: 24px!important;
        }

        .pl-5 {
          padding-left: 32px!important;
        }

        .pl-6 {
          padding-left: 40px!important;
        }

        .pl-7 {
          padding-left: 48px!important;
        }

        .pl-8 {
          padding-left: 64px!important;
        }

        .pl-9 {
          padding-left: 80px!important;
        }

        .pl-10 {
          padding-left: 96px!important;
        }

        .pl-11 {
          padding-left: 112px!important;
        }

        .pl-12 {
          padding-left: 128px!important;
        }
      }

      img[alt=drawing] { width: 200px; }

`