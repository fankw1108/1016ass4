.container {
  grid-template-columns: [1c] 100px [2c] auto [3c] 90px [4c] auto [5c] 50;
  grid-template-rows: [1r] 180px [2r] 30px [3r] auto [4r] 90px [5r] auto [6r] 130px;
}

.nav{
  grid-column: 1c / 5c;
  grid-row: 1r / 2r;
  background-color: #aaa;
}

.item-2 {
  
  background-color: #2ef837;
}