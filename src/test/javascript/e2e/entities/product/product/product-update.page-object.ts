import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../../util/utils';

import path from 'path';

const expect = chai.expect;

const fileToUpload = '../../../../../../../src/main/webapp/content/images/logo-jhipster.png';
const absolutePath = path.resolve(__dirname, fileToUpload);
export default class ProductUpdatePage {
  pageTitle: ElementFinder = element(by.id('storeApp.productProduct.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#product-name'));
  descriptionInput: ElementFinder = element(by.css('input#product-description'));
  priceInput: ElementFinder = element(by.css('input#product-price'));
  productSizeSelect: ElementFinder = element(by.css('select#product-productSize'));
  imageInput: ElementFinder = element(by.css('input#product-image'));
  productCategorySelect: ElementFinder = element(by.css('select#product-productCategory'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setNameInput(name) {
    await this.nameInput.sendKeys(name);
  }

  async getNameInput() {
    return this.nameInput.getAttribute('value');
  }

  async setDescriptionInput(description) {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput() {
    return this.descriptionInput.getAttribute('value');
  }

  async setPriceInput(price) {
    await this.priceInput.sendKeys(price);
  }

  async getPriceInput() {
    return this.priceInput.getAttribute('value');
  }

  async setProductSizeSelect(productSize) {
    await this.productSizeSelect.sendKeys(productSize);
  }

  async getProductSizeSelect() {
    return this.productSizeSelect.element(by.css('option:checked')).getText();
  }

  async productSizeSelectLastOption() {
    await this.productSizeSelect.all(by.tagName('option')).last().click();
  }
  async setImageInput(image) {
    await this.imageInput.sendKeys(image);
  }

  async getImageInput() {
    return this.imageInput.getAttribute('value');
  }

  async productCategorySelectLastOption() {
    await this.productCategorySelect.all(by.tagName('option')).last().click();
  }

  async productCategorySelectOption(option) {
    await this.productCategorySelect.sendKeys(option);
  }

  getProductCategorySelect() {
    return this.productCategorySelect;
  }

  async getProductCategorySelectedOption() {
    return this.productCategorySelect.element(by.css('option:checked')).getText();
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }

  async enterData() {
    await waitUntilDisplayed(this.saveButton);
    await this.setNameInput('name');
    await waitUntilDisplayed(this.saveButton);
    await this.setDescriptionInput('description');
    await waitUntilDisplayed(this.saveButton);
    await this.setPriceInput('5');
    await waitUntilDisplayed(this.saveButton);
    await this.productSizeSelectLastOption();
    await waitUntilDisplayed(this.saveButton);
    await this.setImageInput(absolutePath);
    await this.productCategorySelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
  }
}
