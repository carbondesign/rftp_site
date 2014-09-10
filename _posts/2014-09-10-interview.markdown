---

---

Interview - Matt Cardillo of FINRA Technology
t@f: First of all, can you describe what FastOLA is?
MC: FastOLA is a custom application developed by FINRA’s Technology group that our market analysts use to query large amounts of market trade data that we get from NYSE Euronext, NASDAQ, and DirectEdge exchanges to name a few. 
t@f: What might a market analyst do with FastOLA?
MC: A market analyst might use FastOLA to verify compliance with timing requirements, research a customer complaint, or search for patterns of fraudulent behavior. 
t@f: What does the name FastOLA mean?
MC: OLA stands for Order Lifecycle Assembly.  We assemble all of the steps in an order —e.g., a stock trade— and provide this data and the ability to analyze it to our market analysts.  
t@f: And what about the Fast part?
MC: Fast means just that—the faster our market analysts can analyze this data, the better they can meet our mission to protect investors and maintain the integrity of US markets.
t@f: How do you make it fast?
MC: Certainly intelligent application design is critical, but leveraging cloud computing technologies like Elastic MapReduce (EMR) and open source frameworks like HBase and Hadoop are vital to achieving the results we are seeing now.
t@f: Tell me about the results
MC: Just to give you an example, one query that took over 5 hours to run on our legacy platform runs in 11 seconds on the new platform. 
t@f: Wow, what provides the horsepower for such improvement?
MC: We partnered with Cloudera to engineer a 60-node cluster of HS1 instances in Amazon’s AWS cloud running Hadoop, HBase, and EMR. We are able to spool up nodes like a thermostat on a wall.
t@f: 60 nodes is a lot; how much data do you have out there?
MC: Right now, we have about 3 Petabytes of data in FastOLA, which helps put some context around the 11-second query return I mentioned earlier.
t@f: What’s next for FastOLA?
MC: We’ll continue to replace components of the legacy platform with the new cloud-based platform.  We are working with Cloudera to develop new capabilities in their OS to support our requirements.  In addition, we’re developing a host of cloud management tools that we intend to release to the community under open source.
