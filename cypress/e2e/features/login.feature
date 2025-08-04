@login
Feature: Login Testleri

  Background: Url git
    Given Kullanici "https://www.edu.goit.global/account/login" urline gider

  @tc01 @login @smoke @regression
  Scenario: TC01 Gecerli kullanici bilgileri ile login olabilme
    Given Kullanici urle gider
    When Kullanici gecerli bir email girer
    And Kullanici gecerli bir password girer
    And Kullanici Login butonuna tiklar
    Then Kullanici basarili sekilde login oldugunu dogrular

  @tc02
  Scenario: TC02 Gecerli kullanici bilgileri ile login olabilme  - paremetreli
    When Kullanici email alanina "user888@gmail.com" mailini girer
    When Kullanici password alanina "1234567890" sifresini girer
    And Kullanici Login butonuna tiklar
    Then Kullanici basarili sekilde login oldugunu dogrular

  @tc03
  Scenario: TC03 Gecersiz kullanici bilgileri ile login olamama  - paremetreli
    When Kullanici email alanina "invalidmail@gmail.com" mailini girer
    When Kullanici password alanina "1234567890" sifresini girer
    And Kullanici Login butonuna tiklar
    Then Kullanici basarili sekilde login oldugunu dogrular

  @tc04
  Scenario: TC04 Gecersiz kullanici bilgileri ile login olamama  - paremetreli
    When Kullanici email alanina "user888@gmail.com" mailini girer
    When Kullanici password alanina "1234567890123456" sifresini girer
    And Kullanici Login butonuna tiklar
    Then Kullanici basarili sekilde login oldugunu dogrular

  @tc05
  Scenario: TC04 Gecersiz kullanici bilgileri ile login olamama  - paremetreli
    When Kullanici email alanina "user888@gmail." mailini girer
    When Kullanici password alanina "1234567890" sifresini girer
    And Kullanici Login butonuna tiklar
    Then Kullanici basarili sekilde login oldugunu dogrular

  @tc06
  Scenario Outline: TC<num>  <segment> kullanicisinin login oldugunun dogrulanmasi
    When Kullanici email alanina "<email>" mailini girer
    When Kullanici password alanina "<sifre>" sifresini girer
    And Kullanici Login butonuna tiklar
    Then Kullanici basarili sekilde login oldugunu dogrular

    Examples:
      | num | email             | sifre      | segment |
      |  06 | user888@gmail.com | 1234567890 | Regular |
      |  07 | user888@gmail.com | 1234567890 | Premium |
      |  08 | user888@gmail.com | 1234567890 | Classic |
      |  09 | user888@gmail.com | 1234567890 | Classic |
      |  10 | user888@gmail.com | 1234567890 | Classic |
      |  11 | user888@gmail.com | 1234567890 | Classic |
