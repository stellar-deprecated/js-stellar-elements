```jsx
<Bullets
  data={[
    {
      bullet:
        "Currently the planned coordination to upgrade the Stellar public network to Protocol 11 is scheduled for June 10th, 2019 at 1600 UTC. In order to be prepared for the upcoming switch, all developers building on Stellar will need to take the following steps to ensure compatibility with the upgrade",
      subBullets: [
        {
          bullet:
            "Nested Level 2: Upgrade any Horizon instances to a version >v0.17.5. As of this writing, the latest version is v0.17.6",
          subBullets: [
            {
              bullet:
                "Nested Level 2.1: Upgrade any Stellar Core instances to a version >v14.0.0. As of this writing, the latest version.",
            },
            {
              bullet:
                "Nested Level 2.2: Upgrade any Stellar Core instances to a version >v16.0.0. As of this writing, the latest version is v11.1.0.",
              subBullets: [
                {
                  bullet:
                    "Nested Level 2.2.1: Upgrade any Stellar Core instances to a version >v14.0.0. As of this writing, the latest version.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      bullet:
        "Upgrade to the latest Stellar SDK version for your respective language, making sure that it supports Protocol 11. You can find links on our developer portal to both official and community-maintained SDKs.",
    },
    {
      bullet:
        "Upgrade any Horizon instances to a version >v0.17.5. As of this writing, the  latest version is v0.17.6",
    },
    {
      bullet:
        "Upgrade any Stellar Core instances to a version >v11.0.0. As of this writing, the latest version is v11.1.0.",
    },
  ]}
/>
```
