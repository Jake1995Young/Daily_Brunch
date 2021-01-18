/*this is the JavaScript File*/

/*This function is used to flip between the three different menus*/
function DisplayInfo(Page) {
    var SrcPage = document.getElementById(Page);
    var Food = document.getElementById('FoodContainer');
    var Coctails = document.getElementById('CoctailsContainer');
    var Desserts = document.getElementById('DessertsContainer');

    /*If Else statement to run through the different situations for the menu*/
    if (SrcPage == Food) {
        if (SrcPage.style.display == 'block') {
            SrcPage.style.display = 'none';
        } else {
            Food.style.opacity = 1;
            Food.style.display = 'block';
            Coctails.style.display = 'none';
            Desserts.style.display = 'none';
        }
    } else if (SrcPage == Coctails) {
        if (SrcPage.style.display == 'block') {
            SrcPage.style.display = 'none';
        } else {
            Coctails.style.opacity = 1;
            Food.style.display = 'none';
            Coctails.style.display = 'block';
            Desserts.style.display = 'none';
        }
    } else {
        if (SrcPage.style.display == 'block') {
            SrcPage.style.display = 'none';
        } else {
            Desserts.style.opacity = 1;
            Food.style.display = 'none';
            Coctails.style.display = 'none';
            Desserts.style.display = 'block';
        }
    }
}
