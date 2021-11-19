// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//import "./Mintable.sol";
import "@imtbl/imx-contracts/contracts/Mintable.sol";

contract Asset is Ownable, ERC721, Mintable {
    
    // mapping(address => bool) public hasMintedInPreSale;
    mapping(address => uint) public balances;
    // mapping(uint => bytes) public metadata;
    
    // bool public preSaleEnded;
    uint public totalSupply = 8888;
    // uint public preSaleSupply = 1500;
    uint public preSaleCost = 0.06 ether;
    // uint public mainSaleCost = 0.05 ether;
    // uint public maxMintAmount = 3;
    // bytes public notRevealedUri;
    uint public tokenCount = 0;
    
    constructor(
        address _owner,
        address _imx
    ) ERC721("IMXKaijuz", "KAIJUZ") Mintable(_owner, _imx) {
        // preSaleEnded = false;
        // notRevealedUri = _notRevealedUri;
    }

    function _mintFor(
        address user,
        uint256 id,
        bytes memory _blueprint
    ) internal override {
        _safeMint(user, id);
        blueprints[id] = _blueprint;
        emit AssetMinted(user, id, _blueprint);
    }
    
    function mintToken(address user, string memory blueprint) public {
        tokenCount++;
        _mintFor(user, tokenCount, bytes(blueprint));
    }
    
    // function endPreSale() public onlyOwner{
    //     preSaleEnded = true;
    // }
    
    // function revealNFT(uint _id) public onlyOwner() {
    //     blueprints[_id] = metadata[_id];
    // }
    
    // function withdrawAmount() public onlyOwner(){
    //     (bool success, ) = payable(owner()).call{value: address(this).balance}("");
    //     require(success);
    // }
    
    function presaleBuy(string memory blueprint) public payable{
        require(tokenCount < totalSupply, "Token count exceeded total supply.");
       
        require(msg.value == preSaleCost, "Cost not valid.");
        mintToken(msg.sender, blueprint);
        balances[msg.sender]++;
       
        (bool success, ) = payable(owner()).call{value: msg.value}("");
        require(success, "Payment not sent.");
    }
    
    // function mainSaleBuy(bytes memory blueprint) public payable{
    //     require(preSaleEnded && tokenCount < totalSupply);
    //     require(balances[msg.sender] < maxMintAmount && msg.value == mainSaleCost);
    //     _mintFor(msg.sender, ++tokenCount, blueprint);
    //     balances[msg.sender]++;
    //     (bool success, ) = payable(owner()).call{value: msg.value}("");
    //     require(success);
    // }
}