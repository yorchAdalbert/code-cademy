# TDD with mocha

Test-driven development (TDD) is a programing technique where you write
test code before implementation code.

## Red-green-refactor

### Red

Write a test that covers the functionality you would like to see
implemented. In this phase don't worry is your test suite fail, that's
the main point in this phase.

### Green

Read the error message from the failing test, and write as little code
as possible to fix the current error message.
Just make sure your that the test passes.
Do not focus on code quality at this point.

### Refactor

Clean up your code, reducing any duplication. This includes your code as
well as your tests.

When we use the red, green, refactor cycle, we:

1. Write test code that fails.
2. Write implementation code to make the test pass
3. Consider refactoring the code.

## Refactor

A good place to start with refactoring is to restructure tests to reflect
the four phases of a good test: *setup, exercise, verification, teardown*

## Edge Case

An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter.

That means, if you functions expects a string as argument and by any
chance that input passed through that function was a number, you will
get a edge case.

### At a high-level the process is:

+ Write the test 
    Start with a test describing the functionality.
+ Fail the test
    Write code in response to the test that fails
+ Pass the test
    The test fail and communicate feedback, read those messages and
    write the minimum amount of code to address that issue.
+ Refactor