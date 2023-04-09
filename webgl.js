html, body {
  max-width: 100%;
  overflow-x: hidden;
  background-color: rgb(237, 238, 239);
}

#glbanner {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}

#bannerName {
  position: absolute;
  left: 50%;
  color: rgb(255, 255, 255);
  transform: translate(-50%, -50%);
  font-size: 108px;
  top: 100px;
  font-family: "Delicious Handrawn", cursive;
  white-space: nowrap;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#socials {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 264px;
}

#experience {
  width: 100%;
  height: fit-content;
  top: 400px;
  left: 0;
  position: absolute;
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 12px 0;
  overflow: visible;
}

.logo {
  width: 32px;
  height: 32px;
  color: rgb(255, 255, 255);
  padding: 10px;
  transition: all .2s ease-in-out;
}

#dgslogo {
  padding: 0 16px;
}

#cnlogo {
  padding: 0 16px;
}

.logo:hover { 
  transform: scale(1.15); 
}

.logoLink {
  color: rgba(0, 0, 0, 0);

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgb(241, 241, 241);
  border: 1px solid;
  border-style: outset;
}

::-webkit-scrollbar-thumb {
  background: rgb(193, 193, 193);
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(168, 168, 168);
}

.preload * {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -ms-transition: none !important;
  -o-transition: none !important;
}
