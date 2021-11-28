Feature: Is It Friday Yet

    @TEST_DM-6
    Scenario Outline: Is It Friday Yet
        Given today is "<day>"
        When I ask whether it's Friday yet
        Then I should be told "<answer>"
        Examples:
            | day            | answer |
            | Friday         | TGIF   |
            | Sunday         | Nope   |
            | anything else! | Nope   |