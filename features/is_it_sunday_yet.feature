Feature: Is It Sunday Yet

    @TEST_DM-7
    Scenario Outline: Is It Sunday Yet
        Given today is "<day>"
        When I ask whether it's Sunday yet
        Then I should be told "<answer>"
        Examples:
            | day            | answer |
            | Friday         | Nope   |
            | Sunday         | TGIF   |
            | anything else! | Nope   |