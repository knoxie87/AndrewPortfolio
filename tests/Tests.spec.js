// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Andrew Portfolio");
});

test('check for experience page', async ({ page }) => {

  const pastJobs = ["Junior Developer at Glassbox",'Intern Developer at Fingermark', 'Build and Lift Website Project']

  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Navigation' }).click();
  await page.getByRole('button', { name: 'Experience' }).click();

  await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible()
  const experienceResults = await page.locator('h5').allTextContents()
  
  for( let i = 0; i > experienceResults.length; i++){
    expect(experienceResults[i]).toBe(pastJobs[i])
  }
});

test('check for linkedin contact details page', async ({ page }) => {
  
  await page.goto('http://localhost:3000/');

  // Check we are on right page
  await page.getByRole('button', { name: 'Navigation' }).click();
  await page.getByRole('button', { name: 'Contact' }).click();

  //Check linkedin details.
  await page.getByRole('link', { name: 'Linkedin  Profile' }).click();
  await expect(page).toHaveURL('https://www.linkedin.com/in/andrew-knox-4053761a1/');

});

test('check for github contact details page', async ({ page }) => {
  
  await page.goto('http://localhost:3000/');

  // Check we are on right page
  await page.getByRole('button', { name: 'Navigation' }).click();
  await page.getByRole('button', { name: 'Contact' }).click();
  
  // //check github details
  await page.getByRole('link', { name: 'Github Profile' }).click();
  await expect(page).toHaveURL('https://github.com/knoxie87');
});
