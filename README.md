## Quick tips

1.  **Start developing**

    Navigate into site directory and start it up.

    ```shell
    cd stripe-like-navigation/
    gatsby develop
    ```

1.  **Manage duration of animation**

    In parent component of navbar.

    ```javascript
      state = { duration: 300 }

      render() {
        return (
            <>
                <AnimatedNavbar duration={this.state.duration} />
            </>
      }
    ```

## 🧐 What's inside?

A quick look at whats in the navbar folder.

    .
    ├── DropdownContainer
    ├── DropdownContents
    ├── Navbar
    └── index.js

1.  **`/DropdownContainer`**: This directory contains the code for the dropdown container.

2.  **`/DropdownContents`**: This directory contains content for each of the dropdown menus.

3.  **`/Navbar`**: This directory contains parent component of the dropdown container.

4.  **`index.js`**: Top level component for entire navbar, contains code for animation and menu configuration.
