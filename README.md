# search-app

<!DOCTYPE html>
<html lang="en">
  <!-- <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style type="text/css" nonce="tWFnJgG2PWOuJLui4ORbDQ">
      body,
      td,
      div,
      p,
      a,
      input {
        font-family: arial, sans-serif;
      }
    </style>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css" nonce="tWFnJgG2PWOuJLui4ORbDQ">
      body,
      td {
        font-size: 13px;
      }
      a:link,
      a:active {
        color: #1155cc;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
        cursor: pointer;
      }
      a:visited {
        color: ##6611cc;
      }
      img {
        border: 0px;
      }
      pre {
        white-space: pre;
        white-space: -moz-pre-wrap;
        white-space: -o-pre-wrap;
        white-space: pre-wrap;
        word-wrap: break-word;
        max-width: 800px;
        overflow: auto;
      }
      .logo {
        left: -7px;
        position: relative;
      }
    </style>
  </head> -->
  <body>
    <div class="bodycontainer">
      <hr />
      <div class="maincontent">
        <hr />
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          class="message"
        >
          <tr>
            <td align="right">
              <tr>
                <td colspan="2">
                  <table
                    width="100%"
                    cellpadding="12"
                    cellspacing="0"
                    border="0"
                  >
                    <tr>
                      <td>
                        <div style="overflow: hidden;">
                          <font size="-1">
                            <p>Problem Statment:</p>
                            <p dir="ltr">
                              You have to make a search input box which will
                              search over a list of users.
                            </p>
                            <p dir="ltr">
                              The user object has the following fields
                            </p>
                            <p dir="ltr">id: a unique id</p>
                            <p dir="ltr">name: user’s name</p>
                            <p dir="ltr">
                              items: list of items ordered by user
                            </p>
                            <p dir="ltr">address: address of the user</p>
                            <p dir="ltr">pincode: user address pin code</p>
                            <p dir="ltr">
                              You have to implement search on all of the fields.
                            </p>
                            <p dir="ltr">
                              The search results will show up as a list of User
                              Cards. Refer to the screenshots for how the UI
                              would look like
                            </p>
                            <ol>
                              <li dir="ltr">
                                <p dir="ltr">
                                  Placeholder (empty input)<br /><br /><img
                                    src="https://lh4.googleusercontent.com/LD1eSKcbyukzQDWvnaEqj8yunVQxtZMzGMkwaFcFamKvLKunt-sQcyY11zy1cCs1bG_j2kv3SLr5_nEjZkY2Ryki9UhyRSZ4BvtlWEeGLM6GhYRSCIhhsKTN1Z_R8bKLlzJuowGm"
                                    width="377"
                                    height="63"
                                  />
                                </p>
                              </li>
                              <li dir="ltr">
                                <p dir="ltr">Search Result List</p>
                              </li>
                            </ol>
                            <p dir="ltr">
                              <img
                                src="https://lh6.googleusercontent.com/MDj1Wix-wc8ptBVbU0DE26utmJ6qfDz-K3lRxr1TTxSD1sfI4wf6qSM_LQ9GDvHEGHZ8AoOa1J3GScXPOZ3tpnpSzjq9tNl3g4sBTMQ-J0L4ca_4t6fCp8y3T21ZFMDDpKUy9UCr"
                                width="311"
                                height="393"
                              />
                            </p>
                            <p><br /></p>
                            <p dir="ltr">3. No Results Card</p>
                            <p dir="ltr">
                              <img
                                src="https://lh5.googleusercontent.com/_0kHIwIK4Nx3FXFm8DkyC9vHdkuWw0Tgzkc3yz-wofVORSNOKavl_3G3vEmPvJiNE4idjAMMyyAzJBK1hVT3ROlH1_oubRR4T0iCAlTYQAyR9tOEHw50hxqiUTg7TkMlt1O6x-OV"
                                width="367"
                                height="197"
                              />
                            </p>
                            <h2 dir="ltr">To Summarize</h2>
                            <ol>
                              <li dir="ltr">
                                <p dir="ltr">
                                  On typing in the search input box, the search
                                  results list opens up. The search could be
                                  just a string matching search.
                                </p>
                              </li>
                              <li dir="ltr">
                                <p dir="ltr">
                                  The list of cards can be navigated through
                                  keyboard or mouse
                                </p>
                              </li>
                              <li>
                                <br />
                                <ol>
                                  <li dir="ltr">
                                    <p dir="ltr">
                                      only one card should highlight at a time
                                      if both mouse and keyboard are used for
                                      navigation
                                    </p>
                                  </li>
                                  <li dir="ltr">
                                    <p dir="ltr">
                                      (keyboard will take preference if mouse is
                                      kept hovered on the list, similarly mouse
                                      will take preference if keyboard
                                      navigation is not used).
                                    </p>
                                  </li>
                                  <li dir="ltr">
                                    <p dir="ltr">
                                      This behaviour is similar to how youtube
                                      search works
                                    </p>
                                  </li>
                                </ol>
                              </li>
                              <li dir="ltr">
                                <p dir="ltr">
                                  When no search results are found, an empty
                                  card is displayed
                                </p>
                              </li>
                              <li dir="ltr">
                                <p dir="ltr">
                                  The card list would be scrollable
                                </p>
                              </li>
                              <li dir="ltr">
                                <p dir="ltr">
                                  The highlighted card (via keyboard/mouse) will
                                  scroll into view
                                </p>
                              </li>
                            </ol>
                            <p><br /></p>
                            <p dir="ltr">
                              <a
                                href="http://www.mocky.io/v2/5ba8efb23100007200c2750c"
                                rel="noreferrer"
                                target="_blank"
                                data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.mocky.io/v2/5ba8efb23100007200c2750c&amp;source=gmail&amp;ust=1586846115130000&amp;usg=AFQjCNHQI3w7R8sbFrCmcPfORY_IRbDx3w"
                                >You can find the mock data here</a
                              >
                            </p>
                            <h2 dir="ltr">Evaluation Criteria</h2>
                            <ol>
                              <li dir="ltr">
                                <p dir="ltr">Modularity of code</p>
                              </li>
                              <li dir="ltr">
                                <p dir="ltr">
                                  Handling of Keyboard navigation with mouse.
                                </p>
                              </li>
                              <li dir="ltr">
                                <p dir="ltr">Handling  ScrollIntoView</p>
                              </li>
                            </ol>
                            <p><br /></p>
                            <p dir="ltr">
                              You are free to use any framework for the webapp.
                            </p>
                            <p dir="ltr">1. No jQuery.</p>
                            <p dir="ltr">
                              2. No need for fancy CSS - We know you can do it
                              if you can code this stuff. (But the
                            </p>
                            <p dir="ltr">card structure).</p>
                            <p dir="ltr">
                              3. To submit the solution, please upload the
                              entire folder on Google Drive / Dropbox, share the
                              folder as &#39;anybody with link can view&#39;
                              &amp; then reply back with the link to this email.
                            </p>
                            <p dir="ltr">
                              5. The assignment can be done using plain JS, or
                              any frameworks such as AngularJS, ReactJS.
                            </p>
                            <p dir="ltr">
                              6.
                              <strong
                                >Do not use a library for handling
                                ScrollIntoView.</strong
                              >
                            </p>
                          </font>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>
