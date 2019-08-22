# Tokens Tutorial

This is a test project for DApp Ladies. 

Make sure an instance of ganache-cli is running `ganache-cli`

### Setup

```
git clone https://github.com/dappladies/tokens.git
npm install
```

### Interact
To interact with the application through the terminal, run the following commands:

```
truffle console
migrate
```

After you do this, you should see something like:

```
   Deploying 'DLToken'
   -----------------------
   > transaction hash:    0xbd44481eb10ccac77aba568230898f5290e2b9bd07e41611083ca33a5b874d53
   > Blocks: 0            Seconds: 0
   > contract address:    0x2300e34F11cAbf935D752FA19325A15966108a53
   > account:             0x93a44CE3F16aE5D76317E873B169cCAbaa4d9Ce9
   > balance:             99.02787366
   > gas used:            2091467
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04182934 ETH
```

Copy the contract address and set a contract variable in your terminal.

```
const contract = await DLToken.at('0x2300e34F11cAbf935D752FA19325A15966108a53');
```

Shows you all the functions you can interact with:
`contract.` + click tab twice

**Return totalSupply**
```
let supply = await contracts.totalSupply()
supply.toNumber()
```
Should return 1000

### Testing
To run tests, make sure you have `ganache` running in your terminal

On another tab, run `truffle test`