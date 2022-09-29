// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0;

contract SupplyChain {
    uint256 transactionCount;

    event Transfer(
        address from,
        string productid,
        string message,
        string role,
        uint256 timestamp,
        string entityname
    );

    struct TransferStruct {
        address sender;
        string productid;
        string message;
        string role;
        uint256 timestamp;
        string entityname;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        string memory productid,
        string memory message,
        string memory entityname,
        string memory role
    ) public {
        transactionCount += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                productid,
                message,
                role,
                block.timestamp,
                entityname
            )
        );

        emit Transfer(
            msg.sender,
            productid,
            message,
            role,
            block.timestamp,
            entityname
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
