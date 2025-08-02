@login
Feature: Edu GoIT login alanı testi

  @tc01
  Scenario: Email alanina kelime girilir
    Given Kullanici google sayfasina gider
    When Kullanici aramaya "test@example.com" yazar
