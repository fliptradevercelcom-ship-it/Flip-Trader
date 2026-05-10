import React from "react";
import Title from "../Uiux/Title";

const data1 = [
  "1.1 This Agreement is entered into between FlipTrade Group Ltd (“Company”, “we”, “us”, “our”)...",
  "1.2 This Agreement establishes a legally binding contractual relationship...",
  "1.3 By registering an account, accessing the platform...",
  "1.4 Where the Client is acting on behalf of a legal entity...",
  "1.5 This Agreement applies to all users globally...",
  "1.6 The Client is solely responsible for ensuring compliance...",
  "1.7 Any breach of this Agreement may result in suspension...",
  "1.8 This Agreement shall remain in effect...",

  "2.1 The Client acknowledges that electronic acceptance...",
  "2.2 Such electronic acceptance shall have the same legal force...",
  "2.3 The Client consents to the use of electronic records...",
  "2.4 All notices, disclosures, confirmations...",
  "2.5 The Client agrees that the Company is not obligated...",
  "2.6 It is the Client’s responsibility to maintain access...",
  "2.7 Failure to review electronic communications...",
  "2.8 The Client expressly waives any rights...",

  "3.1 This Agreement governs all aspects...",
  "3.2 The Client confirms that they fully understand...",
  "3.3 This Agreement must be read in conjunction...",
  "3.4 In the event of inconsistency between documents...",
  "3.5 The Agreement applies equally to all forms of access...",
  "3.6 Continued use of the platform constitutes...",
  "3.7 If the Client does not agree...",
  "3.8 The Company reserves the right to deny access...",

  "4.1 The Client represents that they have full legal capacity...",
  "4.2 The Client confirms that all information provided...",
  "4.3 The Company is entitled to rely on such information...",
  "4.4 Where the Client acts on behalf of a third party...",
  "4.5 The Company reserves the right to request documentation...",
  "4.6 The Client agrees to promptly update any changes...",
  "4.7 Failure to provide accurate information...",
  "4.8 The Client acknowledges that impersonation...",

  "5.1 The Client acknowledges that trading in financial instruments...",
  "5.2 The Client confirms sufficient knowledge and experience...",
  "5.3 The Client understands that leverage can magnify...",
  "5.4 The Company does not provide investment advice...",
  "5.5 All trading decisions are made solely...",
  "5.6 The Client is encouraged to seek independent advice...",
  "5.7 The Company does not guarantee profits...",
  "5.8 The Client accepts full responsibility...",

  "6.1 The Client confirms that they are not located...",
  "6.2 The Company does not offer services in unlawful jurisdictions...",
  "6.3 It is the Client’s responsibility to ensure compliance...",
  "6.4 The Company may implement geographic restrictions...",
  "6.5 Use of VPNs or tools to bypass restrictions...",
  "6.6 Any attempt to circumvent legal restrictions...",
  "6.7 The Company shall not be liable...",
  "6.8 Regulatory changes may affect service availability...",

  "7.1 The Company reserves the right to amend this Agreement...",
  "7.2 Material changes will be communicated...",
  "7.3 The Client is responsible for reviewing the Agreement...",
  "7.4 Continued use of services constitutes acceptance...",
  "7.5 If the Client disagrees with changes...",
  "7.6 Certain amendments may take immediate effect...",
  "7.7 Historical versions may be retained...",
  "7.8 Amendments shall not affect accrued rights...",

  "8.1 This Agreement constitutes the entire understanding...",
  "8.2 It supersedes all prior agreements...",
  "8.3 If any provision is found invalid...",
  "8.4 The remaining provisions shall continue...",
  "8.5 Failure to enforce any provision...",
  "8.6 Each clause is independent and severable...",
  "8.7 Legal enforceability shall be interpreted...",
  "8.8 This ensures continuity and stability...",

  "9.1 Certain terms used in this Agreement are defined...",
  "9.2 Definitions apply uniformly...",
  "9.3 Key terms include Account, Platform, Order...",
  "9.4 Definitions are aligned with industry standards...",
  "9.5 Undefined terms shall be interpreted...",
  "9.6 Definitions may be updated...",
  "9.7 The Client is encouraged to review definitions...",
  "9.8 Clear definitions reduce ambiguity...",

  "10.1 Headings and titles are for convenience only...",
  "10.2 Words in singular include plural...",
  "10.3 References to laws include amendments...",
  "10.4 Any ambiguity shall be interpreted...",
  "10.5 This Agreement shall not be construed...",
  "10.6 Language is intended to be clear...",
  "10.7 In case of translation discrepancies...",
  "10.8 Interpretation shall align...",
  // 11-20
];
// 11 - 20

const data2 = [
  "11.1 The Company grants the Client a limited, non-exclusive, non-transferable, and revocable license to access and use the online trading platform solely for personal trading purposes.",

  "11.2 This license does not grant ownership rights in the platform, software, or any associated intellectual property.",

  "11.3 The Client agrees to use the platform strictly in accordance with this Agreement and applicable laws.",

  "11.4 Any unauthorized commercial use, redistribution, or replication of the platform is strictly prohibited.",

  "11.5 The Company reserves the right to suspend or revoke access at its sole discretion where misuse is suspected.",

  "11.6 Access to the platform may be subject to technical, regulatory, or operational limitations.",

  "11.7 The Client acknowledges that access may be interrupted due to maintenance, upgrades, or unforeseen circumstances.",

  "11.8 Continued use of the platform constitutes acceptance of all applicable terms and conditions.",

  "12.1 All content, software, design elements, trademarks, logos, and materials on the platform are the intellectual property of the Company or its licensors.",

  "12.2 Such materials are protected by applicable copyright, trademark, and intellectual property laws.",

  "12.3 The Client is granted a limited right to use the platform content solely for personal, non-commercial purposes.",

  "12.4 The Client shall not copy, modify, distribute, or reproduce any content without prior written consent.",

  "12.5 Unauthorized use of intellectual property may result in legal action and account termination.",

  "12.6 The Company retains all rights not expressly granted in this Agreement.",

  "12.7 The Client agrees not to remove or alter any copyright or proprietary notices.",

  "12.8 Any misuse of intellectual property rights will be strictly enforced under applicable laws.",

  "13.1 The Company does not provide investment advice, financial planning, or portfolio management services.",

  "13.2 All information provided through the platform is for informational and educational purposes only.",

  "13.3 The Client acknowledges that no content constitutes a recommendation to buy, sell, or hold any financial instrument.",

  "13.4 The Client is solely responsible for evaluating the risks and merits of any trading decision.",

  "13.5 The Company does not assess the suitability of trading activities for individual Clients unless required by law.",

  "13.6 Clients are encouraged to seek independent professional advice before engaging in trading activities.",

  "13.7 The Company disclaims any liability arising from reliance on informational content.",

  "13.8 No guarantee of profitability or risk mitigation is provided.",

  "14.1 The Company endeavors to ensure that all information provided on the platform is accurate and up to date.",

  "14.2 However, the Company does not guarantee the completeness, reliability, or timeliness of such information.",

  "14.3 Market data, prices, and analysis may be subject to delays or inaccuracies.",

  "14.4 The Client acknowledges that reliance on such information is at their own risk.",

  "14.5 The Company is not liable for any losses arising from inaccurate or delayed information.",

  "14.6 Information may be updated or corrected without prior notice.",

  "14.7 Third-party data providers may contribute to the information displayed.",

  "14.8 The Client should independently verify critical information before making trading decisions.",

  "15.1 The platform may provide analytical tools, indicators, and market data for informational purposes.",

  "15.2 These tools are provided “as is” without warranties of accuracy or reliability.",

  "15.3 The Client acknowledges that such tools do not guarantee successful trading outcomes.",

  "15.4 Market data may be sourced from third-party providers and may be delayed.",

  "15.5 The Company is not responsible for errors or omissions in analytical tools.",

  "15.6 Use of such tools is entirely at the Client’s own risk.",

  "15.7 The Company does not warrant that tools will meet the Client’s specific requirements.",

  "15.8 Analytical outputs should not be relied upon as sole decision-making factors.",

  "16.1 The platform may include content, research, or links provided by third parties.",

  "16.2 Such content is provided for convenience and informational purposes only.",

  "16.3 The Company does not endorse or verify the accuracy of third-party content.",

  "16.4 The Client acknowledges that reliance on third-party information is at their own risk.",

  "16.5 The Company is not responsible for any losses arising from such reliance.",

  "16.6 Third-party providers operate independently of the Company.",

  "16.7 External content may be subject to separate terms and conditions.",

  "16.8 The Company disclaims liability for any third-party materials or services.",

  "17.1 The Client is responsible for obtaining and maintaining the necessary hardware, software, and internet connectivity.",

  "17.2 Access to the platform may be via web browsers, mobile applications, or APIs.",

  "17.3 The Company does not guarantee compatibility with all devices or systems.",

  "17.4 The Client must ensure secure access to their account credentials.",

  "17.5 The Company is not responsible for unauthorized access due to Client negligence.",

  "17.6 The Client agrees to use the platform in a secure and responsible manner.",

  "17.7 Technical requirements may change over time.",

  "17.8 The Company may restrict access to certain features based on regulatory or operational considerations.",

  "18.1 The Company reserves the right to restrict, suspend, or terminate access to the platform at its discretion.",

  "18.2 Restrictions may be applied in cases of suspected fraud, abuse, or violation of this Agreement.",

  "18.3 The Company may limit access due to regulatory or legal requirements.",

  "18.4 The Client agrees not to engage in abusive trading practices such as arbitrage or latency exploitation.",

  "18.5 Unauthorized access attempts are strictly prohibited.",

  "18.6 The Company may impose limits on usage, trading volume, or account activity.",

  "18.7 Access restrictions may be temporary or permanent.",

  "18.8 The Company is not liable for any losses resulting from restricted access.",

  "19.1 The Client acknowledges that technical issues may arise in connection with the use of the platform.",

  "19.2 Such issues may include connectivity failures, system errors, or server downtime.",

  "19.3 The Company does not guarantee uninterrupted or error-free operation.",

  "19.4 The Client accepts the risks associated with electronic trading systems.",

  "19.5 The Company is not liable for losses resulting from technical disruptions.",

  "19.6 Maintenance and upgrades may temporarily affect availability.",

  "19.7 The Client should implement contingency plans where necessary.",

  "19.8 Technical support may be provided on a reasonable efforts basis.",

  "20.1 A manifest error refers to an obvious mistake in pricing, execution, or platform functionality.",

  "20.2 The Company reserves the right to correct or cancel transactions affected by such errors.",

  "20.3 Adjustments may be made to account balances to reflect correct values.",

  "20.4 The Client agrees to cooperate in resolving manifest errors.",

  "20.5 The Company shall determine the existence of a manifest error in good faith.",

  "20.6 The Client acknowledges that such corrections are necessary to maintain fairness.",

  "20.7 No liability shall arise from correcting manifest errors.",

  "20.8 The Company will notify Clients where practicable.",
];
// 21 - 30

const data3 = [
  "21.1 The Company takes reasonable measures to ensure the platform is free from harmful components.",

  "21.2 However, the Company does not guarantee that the platform is free from viruses or malware.",

  "21.3 The Client is responsible for implementing adequate cybersecurity measures.",

  "21.4 The Company is not liable for damages caused by malicious software.",

  "21.5 The Client should use up-to-date antivirus and security tools.",

  "21.6 Any suspicious activity should be reported immediately.",

  "21.7 The Company does not control third-party systems or networks.",

  "21.8 Use of the platform is at the Client’s own risk.",

  "22.1 The platform may contain links to external websites operated by third parties.",

  "22.2 These links are provided for convenience only.",

  "22.3 The Company does not control or endorse external websites.",

  "22.4 The Client accesses such websites at their own risk.",

  "22.5 The Company is not responsible for content or services on external sites.",

  "22.6 Third-party websites may have separate terms and policies.",

  "22.7 The Client should review those terms independently.",

  "22.8 The Company disclaims all liability related to third-party links.",

  "23.1 The Company may provide software for accessing the trading platform.",

  "23.2 Such software is licensed, not sold, to the Client.",

  "23.3 The Client may not modify, reverse engineer, or copy the software.",

  "23.4 Unauthorized use of software is strictly prohibited.",

  "23.5 Updates and patches may be required for continued use.",

  "23.6 The Company is not responsible for compatibility issues.",

  "23.7 The Client must use software in accordance with this Agreement.",

  "23.8 Breach of software terms may result in termination of access.",

  "24.1 The platform may include forward-looking statements or projections.",

  "24.2 Such statements are based on assumptions and market conditions.",

  "24.3 The Company does not guarantee future performance.",

  "24.4 Past performance is not indicative of future results.",

  "24.5 The Client should not rely solely on such statements.",

  "24.6 Market conditions may change rapidly and unpredictably.",

  "24.7 The Company disclaims liability for reliance on projections.",

  "24.8 All trading decisions remain the Client’s responsibility.",

  "25.1 The Company provides an online trading platform enabling Clients to access financial markets and execute transactions in various financial instruments, including but not limited to Forex, Contracts for Difference (CFDs), commodities, indices, shares, and cryptocurrencies where permitted.",

  "25.2 The services offered are execution-only in nature, meaning the Company does not provide discretionary portfolio management or investment advisory services unless explicitly stated.",

  "25.3 The Company acts as an intermediary facilitating the execution of Client orders through its trading infrastructure and liquidity arrangements.",

  "25.4 Access to services is provided via web-based platforms, mobile applications, and other approved technological interfaces.",

  "25.5 The Company reserves the right to modify, suspend, or discontinue any service at its discretion, subject to regulatory requirements.",

  "25.6 Certain services or instruments may not be available in all jurisdictions due to legal or regulatory restrictions.",

  "25.7 The Client acknowledges that service availability may depend on account type, verification status, and regulatory classification.",

  "25.8 The Company shall not be liable for any inability to access services due to restrictions or changes in service offerings.",

  "26.1 To access the Company’s services, the Client must complete the registration process by providing accurate and complete information.",

  "26.2 The Client agrees to provide truthful, current, and verifiable personal and financial information during registration.",

  "26.3 The Company reserves the right to reject or refuse any registration at its sole discretion without obligation to provide reasons.",

  "26.4 Registration may require submission of identification documents in accordance with regulatory requirements.",

  "26.5 The Client is responsible for maintaining the confidentiality of login credentials and account access.",

  "26.6 Any unauthorized use of the Client’s account must be reported immediately to the Company.",

  "26.7 The Company may impose additional verification steps before activating or allowing trading activity.",

  "26.8 Incomplete or inaccurate registration details may result in account suspension or refusal of services.",

  "27.1 The Client must be at least 18 years of age or the legal age of majority in their jurisdiction, whichever is higher.",

  "27.2 The Client must have the legal capacity to enter into binding agreements.",

  "27.3 The Company does not provide services to individuals or entities located in restricted jurisdictions.",

  "27.4 The Client must not be subject to any legal or regulatory restrictions preventing them from trading financial instruments.",

  "27.5 The Company reserves the right to request proof of eligibility at any time.",

  "27.6 Eligibility may be reassessed periodically based on regulatory requirements.",

  "27.7 The Client agrees to notify the Company of any changes affecting their eligibility.",

  "27.8 Failure to meet eligibility requirements may result in immediate suspension or termination of the account.",

  "28.1 The Company is required to verify the identity of all Clients in accordance with Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations.",

  "28.2 The Client agrees to provide all requested identification documents, including proof of identity and proof of address.",

  "28.3 The Company may conduct additional due diligence checks, including electronic verification and third-party database screening.",

  "28.4 The Company reserves the right to request additional documentation at any time during the business relationship.",

  "28.5 Failure to provide requested documentation may result in account suspension or restricted functionality.",

  "28.6 The Company may delay or refuse transactions until verification requirements are satisfied.",

  "28.7 All collected information will be handled in accordance with applicable data protection laws.",

  "28.8 The Client acknowledges that compliance with AML/KYC obligations is mandatory and non-negotiable.",

  "29.1 The Client agrees to provide accurate, complete, and up-to-date personal and financial information at all times.",

  "29.2 The Client must promptly notify the Company of any changes to their personal details, including contact information and financial status.",

  "29.3 The Company relies on the accuracy of Client information for compliance, regulatory reporting, and service delivery.",

  "29.4 Providing false, misleading, or incomplete information is strictly prohibited and may constitute a breach of this Agreement.",

  "29.5 The Company reserves the right to verify Client information through independent sources.",

  "29.6 Failure to maintain accurate information may result in account suspension, restricted access, or termination.",

  "29.7 The Client acknowledges that inaccurate information may impact the execution of transactions or access to services.",

  "29.8 All personal data will be processed in accordance with the Company’s Privacy Policy and applicable data protection laws.",

  "30.1 The Company provides execution-only brokerage services enabling Clients to trade financial instruments through its electronic trading platforms.",

  "30.2 The services include order execution, account management tools, market access, and reporting functionalities.",

  "30.3 The Company does not provide discretionary trading, portfolio management, or personalized investment advice.",

  "30.4 All services are provided on a best-efforts basis and are subject to market conditions and system availability.",

  "30.5 The Company may introduce, modify, or discontinue services at its discretion in accordance with regulatory obligations.",

  "30.6 The Client acknowledges that services may vary depending on account type and jurisdiction.",

  "30.7 The Company may rely on third-party liquidity providers for execution services.",

  "30.8 The Client agrees that the scope of services is limited to what is explicitly described in this Agreement.",
];

// 31 - 40

const data4 = [
  "31.1 The Company shall execute Client orders in accordance with its Order Execution Policy and prevailing market conditions.",

  "31.2 Orders may be executed using market execution or other execution methods as determined by the Company.",

  "31.3 The Client acknowledges that execution prices may differ from requested prices due to slippage or market volatility.",

  "31.4 The Company does not guarantee execution at the exact price requested by the Client.",

  "31.5 Orders may be partially filled or rejected depending on market liquidity.",

  "31.6 The Client accepts that delays in execution may occur due to technical or market factors.",

  "31.7 The Company reserves the right to refuse or cancel orders in certain circumstances.",

  "31.8 All executed trades are binding once confirmed on the platform.",

  "32.1 Prices displayed on the platform are indicative and subject to change without prior notice.",

  "32.2 Market prices are derived from liquidity providers and may vary across sources.",

  "32.3 The Client acknowledges that price fluctuations may occur rapidly, especially during volatile market conditions.",

  "32.4 Open positions are subject to real-time market movements and may result in gains or losses.",

  "32.5 The Company does not guarantee the accuracy or availability of price feeds at all times.",

  "32.6 Stop-loss and take-profit orders are not guaranteed and may be executed at different levels.",

  "32.7 The Client is responsible for monitoring their open positions.",

  "32.8 The Company is not liable for losses arising from price discrepancies or delays.",

  "33.1 The Company may offer trading in cryptocurrency-based instruments where permitted by regulation.",

  "33.2 Cryptocurrency markets are highly volatile and may experience significant price fluctuations.",

  "33.3 The Client acknowledges that cryptocurrencies may not be regulated in all jurisdictions.",

  "33.4 Trading in cryptocurrencies carries additional risks, including market manipulation and liquidity constraints.",

  "33.5 The Company does not guarantee continuous availability of cryptocurrency trading.",

  "33.6 The Client is responsible for understanding the risks associated with digital assets.",

  "33.7 The Company may impose restrictions on cryptocurrency trading based on regulatory requirements.",

  "33.8 The Company shall not be liable for losses arising from cryptocurrency market conditions.",

  "34.1 The Company acts on instructions provided by the Client through the trading platform.",

  "34.2 Instructions must be clear, complete, and submitted via approved communication channels.",

  "34.3 The Company is entitled to rely on instructions received from the Client’s account.",

  "34.4 The Client is responsible for ensuring the accuracy of all submitted instructions.",

  "34.5 The Company is not liable for errors resulting from incorrect or incomplete instructions.",

  "34.6 Instructions are irrevocable once executed.",

  "34.7 The Company may refuse instructions that are inconsistent with this Agreement.",

  "34.8 All transactions are executed on an execution-only basis without advisory input.",

  "35.1 The Client acknowledges that all trading activities are conducted electronically through the Company’s platform.",

  "35.2 Electronic trading involves inherent risks, including system delays and technical failures.",

  "35.3 The Client accepts full responsibility for orders submitted electronically.",

  "35.4 The Company does not guarantee uninterrupted access to the platform.",

  "35.5 The Client must ensure proper use of the platform and associated systems.",

  "35.6 Unauthorized access or misuse of electronic systems is strictly prohibited.",

  "35.7 The Company may implement safeguards to protect platform integrity.",

  "35.8 The Client acknowledges the risks associated with reliance on electronic systems.",

  "36.1 The Company uses automated systems and algorithms to facilitate trade execution.",

  "36.2 Orders are processed based on predefined execution logic and market conditions.",

  "36.3 The Client acknowledges that execution may occur without manual intervention.",

  "36.4 The Company may use external liquidity providers to execute trades.",

  "36.5 Execution methodology may vary depending on instrument and market conditions.",

  "36.6 The Company does not guarantee execution speed or price.",

  "36.7 System performance may be affected by external factors.",

  "36.8 The Client accepts the risks associated with automated execution systems.",

  "37.1 The Company provides electronic confirmations for all executed trades.",

  "37.2 Account statements are made available through the platform or via email.",

  "37.3 The Client is responsible for reviewing confirmations and statements promptly.",

  "37.4 Any discrepancies must be reported within a reasonable timeframe.",

  "37.5 Failure to report discrepancies may result in acceptance of the records as accurate.",

  "37.6 Statements may include transaction history, balances, and open positions.",

  "37.7 The Company may correct errors in statements where necessary.",

  "37.8 Electronic records shall be considered official and binding.",

  "38.1 The Client consents to receive all communications electronically.",

  "38.2 This includes trade confirmations, statements, notices, and disclosures.",

  "38.3 Electronic communications may be delivered via email or platform notifications.",

  "38.4 The Client is responsible for maintaining updated contact details.",

  "38.5 The Company is not liable for missed communications due to outdated information.",

  "38.6 Electronic records shall have the same legal effect as physical documents.",

  "38.7 The Client may request physical copies where required by law.",

  "38.8 Continued use of services constitutes ongoing consent to electronic communication.",

  "39.1 The Company may record telephone calls, emails, chats, and other communications.",

  "39.2 Recordings are used for compliance, dispute resolution, and quality assurance.",

  "39.3 The Client consents to such recording and monitoring.",

  "39.4 Recorded communications may be used as evidence in legal proceedings.",

  "39.5 The Company retains records in accordance with regulatory requirements.",

  "39.6 Access to recordings may be restricted for confidentiality purposes.",

  "39.7 The Client may request access to recordings where permitted by law.",

  "39.8 Recording practices comply with applicable data protection laws.",

  "40.1 Positions held overnight may be subject to rollover or swap charges.",

  "40.2 Such charges are based on interest rate differentials and market conditions.",

  "40.3 The Client acknowledges that rollover rates may change without notice.",

  "40.4 The Company may apply or adjust swap rates at its discretion.",

  "40.5 Offset instructions may be used to close or net positions.",

  "40.6 The Client is responsible for understanding rollover costs.",

  "40.7 The Company is not liable for losses arising from rollover charges.",

  "40.8 Swap-free accounts may be subject to alternative fees or conditions.",
];
// 41 - 50

const data5 = [
  "41.1 Corporate events such as dividends, stock splits, and mergers may affect open positions.",

  "41.2 The Company may adjust positions to reflect such events.",

  "41.3 Adjustments may include price modifications or account credits/debits.",

  "41.4 The Company is not responsible for delays in processing corporate actions.",

  "41.5 The Client acknowledges that such events are outside the Company’s control.",

  "41.6 The Company may rely on third-party data for corporate event information.",

  "41.7 The Client is responsible for understanding the impact of such events.",

  "41.8 The Company shall not be liable for losses arising from corporate actions.",

  "42.1 The Company facilitates the execution of Client orders in shares and share-based instruments through its trading platform.",

  "42.2 Orders are executed in accordance with prevailing market conditions and the Company’s Order Execution Policy.",

  "42.3 The Client acknowledges that execution may occur through third-party liquidity providers or exchanges.",

  "42.4 The Company does not guarantee execution at the requested price due to market fluctuations.",

  "42.5 Orders may be subject to delays, partial fills, or rejection depending on market liquidity.",

  "42.6 The Client agrees that executed trades are final and binding once confirmed.",

  "42.7 The Company may aggregate or split orders where necessary for execution efficiency.",

  "42.8 The Company is not liable for losses resulting from execution delays or market conditions.",

  "43.1 The Client agrees to pay all applicable fees, commissions, and charges associated with trading in shares.",

  "43.2 Fees may include spreads, commissions, overnight charges, and other applicable costs.",

  "43.3 All fees are disclosed transparently through the platform or official Company documentation.",

  "43.4 The Company reserves the right to modify fees with prior notice where required.",

  "43.5 The Client is responsible for reviewing and understanding all applicable charges.",

  "43.6 Fees may vary depending on account type, trading volume, and instrument.",

  "43.7 Failure to pay fees may result in account restrictions or closure.",

  "43.8 The Company is not responsible for any third-party charges incurred by the Client.",

  "44.1 The Company reserves the right to refuse or cancel any Client instruction to trade.",

  "44.2 Such actions may be taken in cases of suspected fraud, market abuse, or regulatory requirements.",

  "44.3 The Company may cancel orders affected by technical errors or system malfunctions.",

  "44.4 The Client will be notified of any refusal or cancellation where practicable.",

  "44.5 The Company is not obligated to provide reasons for refusal in all cases.",

  "44.6 Orders may also be refused due to insufficient margin or account balance.",

  "44.7 The Client acknowledges that such actions are necessary to maintain market integrity.",

  "44.8 The Company shall not be liable for losses resulting from refused or canceled orders.",

  "45.1 The Company may impose restrictions on certain transactions based on regulatory, operational, or risk considerations.",

  "45.2 Restrictions may apply to specific instruments, markets, or account types.",

  "45.3 The Client agrees to comply with all transaction limits and restrictions imposed.",

  "45.4 The Company may modify or remove restrictions at its discretion.",

  "45.5 Certain transactions may be subject to additional verification or approval.",

  "45.6 The Client acknowledges that restrictions may affect trading strategies.",

  "45.7 The Company is not liable for losses arising from imposed restrictions.",

  "45.8 Transaction restrictions are implemented to ensure compliance and risk management.",

  "46.1 Share trading services are provided electronically through the Company’s trading platform.",

  "46.2 The Client acknowledges the risks associated with electronic trading systems.",

  "46.3 The Company does not guarantee uninterrupted access to electronic services.",

  "46.4 The Client is responsible for ensuring proper use of the platform.",

  "46.5 Electronic trading may be affected by technical issues or system failures.",

  "46.6 The Company may implement system safeguards to ensure fair trading.",

  "46.7 Unauthorized use of electronic trading systems is prohibited.",

  "46.8 The Company is not liable for losses caused by electronic system failures.",

  "47.1 The Client acknowledges that trading in share-based instruments may not confer ownership rights in the underlying shares unless explicitly stated.",

  "47.2 The Client may not be entitled to voting rights or shareholder privileges.",

  "47.3 Dividend adjustments may be applied to open positions where applicable.",

  "47.4 Interest or financing charges may apply to positions held over time.",

  "47.5 Corporate actions may impact pricing and valuation of positions.",

  "47.6 The Company may rely on third-party data for corporate event information.",

  "47.7 The Client is responsible for understanding the implications of such events.",

  "47.8 The Company is not liable for discrepancies in corporate event data.",

  "48.1 Settlement of share transactions is conducted in accordance with applicable market practices.",

  "48.2 The Client acknowledges that settlement timelines may vary depending on the instrument and market.",

  "48.3 The Company facilitates settlement through its systems and counterparties.",

  "48.4 Delays in settlement may occur due to external factors.",

  "48.5 The Client is responsible for ensuring sufficient funds for settlement obligations.",

  "48.6 The Company may take necessary actions to resolve settlement failures.",

  "48.7 Settlement processes are subject to regulatory requirements.",

  "48.8 The Company is not liable for delays caused by third-party entities.",

  "49.1 The Company may allow the transfer of financial instruments subject to applicable conditions.",

  "49.2 Dematerialized instruments are held electronically within the platform.",

  "49.3 Physical certificates, if applicable, may require conversion into electronic form.",

  "49.4 The Client must comply with all procedures for transferring instruments.",

  "49.5 The Company may charge fees for transfer-related services.",

  "49.6 Transfers may be subject to regulatory approvals or restrictions.",

  "49.7 The Client acknowledges that delays may occur during transfer processes.",

  "49.8 The Company is not liable for losses arising from transfer delays or errors.",

  "50.1 The Client is solely responsible for all tax obligations arising from trading activities.",

  "50.2 The Company does not provide tax advice or guidance.",

  "50.3 Tax treatment may vary depending on jurisdiction and individual circumstances.",

  "50.4 The Company may provide transaction reports for tax reporting purposes.",

  "50.5 The Client is responsible for accurate reporting to relevant authorities.",

  "50.6 The Company may deduct withholding taxes where required by law.",

  "50.7 The Client should seek independent tax advice where necessary.",

  "50.8 The Company is not liable for any tax-related consequences.",
];

// 51 - 60
const data6 = [
  "51.1 The Company provides Clients with access to transaction history and account reports.",
  "51.2 Reports may include executed trades, balances, and open positions.",
  "51.3 The Client is responsible for reviewing reports regularly.",
  "51.4 Any discrepancies must be reported promptly.",
  "51.5 Reports are provided electronically through the platform.",
  "51.6 The Company may correct reporting errors where identified.",
  "51.7 Reports are subject to system availability and accuracy of data.",
  "51.8 The Company is not liable for losses arising from reporting inaccuracies.",

  "52.1 The Company may provide a copy trading feature that allows Clients to automatically replicate trades executed by other traders (“Strategy Providers” or “Managers”).",
  "52.2 The copy trading service is provided for convenience and informational purposes only and does not constitute investment advice or portfolio management.",
  "52.3 The Client acknowledges that copied trades are executed automatically without prior approval for each transaction.",
  "52.4 The Company does not guarantee the performance or profitability of any Strategy Provider.",
  "52.5 The Client retains full control over their account and may stop copying at any time.",
  "52.6 Execution of copied trades may be subject to delays, slippage, or differences in pricing.",
  "52.7 The Company may suspend or modify the copy trading service at its discretion.",
  "52.8 Use of the copy trading platform is entirely at the Client’s own risk.",

  "53.1 A Client acting as an Investor (or Follower) chooses to copy the trading strategies of selected Strategy Providers.",
  "53.2 The Investor is responsible for selecting Strategy Providers based on their own assessment and risk tolerance.",
  "53.3 The Company does not provide recommendations regarding which Strategy Providers to follow.",
  "53.4 The Investor acknowledges that past performance is not indicative of future results.",
  "53.5 The Investor may allocate funds to multiple Strategy Providers at their discretion.",
  "53.6 The Investor retains the ability to manually close positions at any time.",
  "53.7 The Investor accepts full responsibility for any losses incurred through copy trading.",
  "53.8 The Company shall not be liable for decisions made by the Investor.",

  "54.1 A Manager (or Strategy Provider) is a Client who allows others to copy their trading activity.",
  "54.2 The Manager does not provide investment advice or fiduciary services to Investors.",
  "54.3 The Company does not verify or endorse the qualifications or strategies of Managers.",
  "54.4 Performance data displayed for Managers is based on historical trading and may not reflect future outcomes.",
  "54.5 Managers are responsible for their own trading decisions and compliance with this Agreement.",
  "54.6 The Company may impose eligibility criteria for Clients to act as Managers.",
  "54.7 The Company reserves the right to remove or suspend Managers from the platform.",
  "54.8 The Company is not liable for the actions or performance of Managers.",

  "55.1 The copy trading service may not replicate trades exactly due to differences in account size, execution timing, and market conditions.",
  "55.2 Minimum trade sizes and platform limitations may affect the replication of trades.",
  "55.3 The Company does not guarantee that all trades of a Manager will be copied.",
  "55.4 Delays in execution may result in different entry or exit prices.",
  "55.5 The Client acknowledges that technical issues may impact copy trading performance.",
  "55.6 The Company may impose limits on the number of accounts or funds allocated to copy trading.",
  "55.7 Copy trading functionality may be modified or discontinued at any time.",
  "55.8 The Company is not liable for discrepancies between copied and original trades.",

  "56.1 Copy trading involves a high level of risk and may result in significant financial losses.",
  "56.2 The Client acknowledges that losses may exceed initial investment due to leverage.",
  "56.3 Strategy Providers may engage in high-risk trading strategies that are not suitable for all Investors.",
  "56.4 Market volatility may lead to rapid and substantial losses.",
  "56.5 Diversification across multiple Strategy Providers does not eliminate risk.",
  "56.6 The Client may lose part or all of their invested capital.",
  "56.7 The Company does not guarantee any level of performance or risk control.",
  "56.8 The Client should carefully consider their financial situation before participating in copy trading.",

  "57.1 The Company shall not be liable for any losses arising from the use of the copy trading service.",
  "57.2 The Client acknowledges that all trading decisions, including copying others, are made at their own risk.",
  "57.3 The Company is not responsible for the accuracy or reliability of Strategy Provider data.",
  "57.4 The Company does not assume responsibility for the actions of Managers or Investors.",
  "57.5 The Client agrees to indemnify the Company against claims arising from their use of copy trading.",
  "57.6 The Company is not liable for technical issues affecting copy trading execution.",
  "57.7 The Client accepts that the service is provided “as is” without warranties.",
  "57.8 Liability limitations apply to the fullest extent permitted by law.",

  "58.1 The Company may provide community features, including forums, social feeds, leaderboards, messaging, or other interactive tools (“Community Features”) to enhance user engagement.",
  "58.2 Participation in Community Features is voluntary and intended for informational and social purposes only.",
  "58.3 The Client acknowledges that content shared by other users does not constitute financial advice or recommendations.",
  "58.4 The Company does not endorse, verify, or guarantee the accuracy of user-generated content.",
  "58.5 The Client agrees to use Community Features responsibly and in compliance with applicable laws and this Agreement.",
  "58.6 The Client shall not post or share content that is misleading, fraudulent, abusive, defamatory, or otherwise inappropriate.",
  "58.7 The Company reserves the right to monitor, moderate, edit, or remove any content at its discretion.",
  "58.8 The Company is not liable for any losses or damages arising from reliance on Community Feature content.",

  "58.9 The Client agrees not to engage in activities that may harm the integrity or reputation of the platform or other users.",
  "58.10 Prohibited conduct includes but is not limited to spamming, harassment, impersonation, or dissemination of false information.",
  "58.11 The Client shall not promote unauthorized financial services or external trading platforms.",
  "58.12 The Company may restrict or terminate access to Community Features for violations.",
  "58.13 Repeated violations may result in suspension or termination of the Client’s account.",
  "58.14 The Company may report unlawful activities to relevant authorities.",
  "58.15 The Client acknowledges that Community Features are provided “as is” without warranties.",
  "58.16 The Company reserves the right to modify or discontinue Community Features at any time.",

  "59.1 The Client is required to maintain sufficient margin and collateral in their account to support open positions.",
  "59.2 Margin requirements are determined by the Company and may vary depending on the instrument, market conditions, and account type.",
  "59.3 The Client acknowledges that insufficient margin may result in automatic liquidation of positions.",
  "59.4 The Company may change margin requirements without prior notice where necessary.",
  "59.5 Collateral provided by the Client may be used to secure obligations arising from trading activities.",
  "59.6 The Client agrees that the Company has the right to apply collateral to cover losses or liabilities.",
  "59.7 The Client is responsible for monitoring margin levels at all times.",
  "59.8 The Company is not liable for losses resulting from margin insufficiency.",

  "60.1 A margin call occurs when the Client’s account equity falls below the required margin level.",
  "60.2 The Company may notify the Client of a margin call but is not obligated to do so.",
  "60.3 The Client is responsible for maintaining sufficient funds to meet margin requirements at all times.",
  "60.4 If margin levels fall below the stop-out level, the Company may automatically close open positions.",
  "60.5 Stop-out levels are determined by the Company and may vary depending on account conditions.",
  "60.6 Liquidation of positions may occur without prior notice to prevent further losses.",
  "60.7 The Client acknowledges that rapid market movements may lead to immediate liquidation.",
  "60.8 The Company is not liable for losses arising from margin calls or stop-out actions.",
];

// 61 - 70
const data7 = [
  "61.1 The Client is responsible for maintaining the confidentiality and security of their account credentials.",
  "61.2 The Client must not share login details with any third party.",
  "61.3 The Company is not liable for unauthorized access resulting from Client negligence.",
  "61.4 The Client must immediately notify the Company of any suspected unauthorized activity.",
  "61.5 The Company may implement security measures such as two-factor authentication.",
  "61.6 The Client agrees to comply with all security protocols established by the Company.",
  "61.7 The Company may suspend access if security risks are detected.",
  "61.8 The Client acknowledges that electronic systems carry inherent security risks.",

  "62.1 The Client agrees to pay all applicable commissions, spreads, fees, and charges associated with the use of the Company’s services.",
  "62.2 Charges may include, but are not limited to, trading commissions, spreads, swap/rollover fees, inactivity fees, and account maintenance fees.",
  "62.3 All fees are transparently disclosed on the Company’s website or trading platform prior to execution of transactions.",
  "62.4 The Company reserves the right to amend its fee structure in accordance with market conditions or regulatory requirements.",
  "62.5 Any changes to fees will be communicated to Clients where required by applicable law.",
  "62.6 The Client is responsible for reviewing and understanding all applicable fees before engaging in trading activities.",
  "62.7 Fees will be automatically deducted from the Client’s account balance.",
  "62.8 The Company shall not be liable for losses resulting from the application of fees or charges.",

  "63.1 The Client may incur additional fees not directly charged by the Company, including bank fees, payment processor charges, or currency conversion costs.",
  "63.2 Such third-party fees are outside the control of the Company and may vary depending on the payment method used.",
  "63.3 The Company is not responsible for any additional charges imposed by financial institutions.",
  "63.4 The Client acknowledges that intermediary banks may deduct fees during fund transfers.",
  "63.5 Currency conversion fees may apply where transactions involve different currencies.",
  "63.6 The Company may provide estimates of third-party fees but does not guarantee their accuracy.",
  "63.7 The Client is responsible for verifying all applicable charges with their payment provider.",
  "63.8 The Company shall not be liable for discrepancies in third-party fee calculations.",

  "64.1 The Client agrees to comply with all payment obligations arising from trading activities.",
  "64.2 Payments must be made using approved payment methods as specified by the Company.",
  "64.3 The Company may impose minimum or maximum limits on deposits and withdrawals.",
  "64.4 The Client must ensure that sufficient funds are available to cover trading and fee obligations.",
  "64.5 The Company reserves the right to refuse or delay payments where compliance checks are required.",
  "64.6 Payment processing times may vary depending on the method used.",
  "64.7 The Client acknowledges that delays may occur due to banking systems or regulatory reviews.",
  "64.8 The Company is not liable for delays in payment processing caused by third parties.",

  "65.1 Transactions conducted in a currency different from the account’s base currency will be subject to conversion.",
  "65.2 Conversion rates are determined by the Company based on prevailing market rates.",
  "65.3 The Company may apply a conversion margin or fee.",
  "65.4 The Client acknowledges that exchange rates may fluctuate.",
  "65.5 Conversion may occur at the time of transaction or settlement.",
  "65.6 The Client is responsible for understanding the impact of currency fluctuations.",
  "65.7 The Company does not guarantee the most favorable exchange rates.",
  "65.8 The Company is not liable for losses resulting from currency conversion.",

  "66.1 Prices for over-the-counter (OTC) transactions are determined by the Company or its liquidity providers.",
  "66.2 OTC pricing may differ from prices available on regulated exchanges.",
  "66.3 The Client acknowledges that OTC markets may have lower transparency.",
  "66.4 The Company does not guarantee the availability of specific price levels.",
  "66.5 Prices may be affected by market volatility and liquidity conditions.",
  "66.6 The Client accepts that pricing may include spreads or mark-ups.",
  "66.7 The Company shall act in good faith in determining prices.",
  "66.8 The Company is not liable for losses arising from OTC pricing variations.",

  "67.1 The Client agrees not to engage in prohibited trading practices that exploit system inefficiencies or market anomalies.",
  "67.2 Prohibited techniques include arbitrage abuse, latency exploitation, high-frequency trading (HFT), and toxic trading strategies.",
  "67.3 The Company reserves the right to investigate suspicious trading activity.",
  "67.4 Accounts found to be engaging in prohibited practices may be suspended or terminated.",
  "67.5 The Company may cancel trades or adjust account balances where abuse is detected.",
  "67.6 The Client acknowledges that such measures are necessary to maintain fair market conditions.",
  "67.7 The Company is not liable for losses resulting from enforcement actions.",
  "67.8 Repeated violations may result in permanent account closure.",

  "68.1 The Client may open one or more trading accounts with the Company, subject to approval.",
  "68.2 Each account is governed by this Agreement and applicable policies.",
  "68.3 The Company reserves the right to refuse or close accounts at its discretion.",
  "68.4 The Client is responsible for all activity conducted through their account.",
  "68.5 Accounts must be used solely by the registered Client.",
  "68.6 The Company may impose limits on account types or features.",
  "68.7 The Client must comply with all account-related requirements.",
  "68.8 Account misuse may result in suspension or termination.",

  "69.1 Each account will have a designated base currency selected by the Client.",
  "69.2 All transactions will be recorded in the base currency.",
  "69.3 Currency conversion may apply for transactions in other currencies.",
  "69.4 The Client is responsible for choosing an appropriate base currency.",
  "69.5 The Company may restrict available base currencies.",
  "69.6 Changes to base currency may not be permitted after account creation.",
  "69.7 Exchange rate fluctuations may impact account balances.",
  "69.8 The Company is not liable for currency-related losses.",

  "70.1 The Client is responsible for maintaining the confidentiality of login credentials.",
  "70.2 Access codes must not be shared with any third party.",
  "70.3 The Company is not liable for unauthorized access due to Client negligence.",
  "70.4 The Client must notify the Company immediately of any suspected breach.",
  "70.5 The Company may require password updates for security purposes.",
  "70.6 Multi-factor authentication may be implemented.",
  "70.7 The Client agrees to use secure devices and networks.",
  "70.8 Unauthorized use may result in account suspension.",
];

// 71 - 80
const data8 = [
  "71.1 The Company may engage affiliates or introducers to refer Clients.",
  "71.2 Such parties may receive compensation based on Client activity.",
  "71.3 The Client acknowledges potential conflicts of interest.",
  "71.4 Affiliates do not have authority to act on behalf of the Company.",
  "71.5 The Company is not responsible for representations made by affiliates.",
  "71.6 The Client should verify all information independently.",
  "71.7 Affiliate relationships are governed by separate agreements.",
  "71.8 The Company reserves the right to terminate affiliate arrangements.",

  "72.1 All payments into and out of the account must be made through approved methods.",
  "72.2 The Company may require payments to originate from accounts in the Client’s name.",
  "72.3 Third-party payments may be rejected.",
  "72.4 The Company may perform verification checks before processing payments.",
  "72.5 Payment processing times may vary.",
  "72.6 The Client is responsible for any fees incurred.",
  "72.7 The Company may refuse payments for compliance reasons.",
  "72.8 The Company is not liable for delays caused by payment providers.",

  "73.1 The Client may hold multiple accounts subject to Company approval.",
  "73.2 Each account must comply with this Agreement.",
  "73.3 The Company may impose limits on the number of accounts.",
  "73.4 Accounts must not be used for abusive trading strategies.",
  "73.5 The Company may aggregate accounts for risk assessment.",
  "73.6 Transfers between accounts may be subject to restrictions.",
  "73.7 Misuse of multiple accounts may result in suspension.",
  "73.8 The Company reserves the right to consolidate accounts.",

  "74.1 The Client may deposit funds using approved payment methods.",
  "74.2 Withdrawals are subject to verification and compliance checks.",
  "74.3 The Company may require withdrawals to be made via the original funding method.",
  "74.4 Refunds may be issued in accordance with applicable policies.",
  "74.5 Processing times may vary depending on the payment method.",
  "74.6 The Client must ensure accurate payment details.",
  "74.7 The Company may delay withdrawals for regulatory reasons.",
  "74.8 The Company is not liable for delays caused by third parties.",

  "75.1 Deposits via card must be made using cards registered in the Client’s name.",
  "75.2 The Company may verify card ownership before processing deposits.",
  "75.3 Refunds may be processed back to the same card.",
  "75.4 Card transactions may be subject to limits.",
  "75.5 The Client must comply with card provider rules.",
  "75.6 The Company may decline card transactions for security reasons.",
  "75.7 Additional verification may be required.",
  "75.8 The Company is not liable for declined transactions.",

  "76.1 The Client agrees not to initiate unjustified chargebacks.",
  "76.2 Chargebacks may be investigated by the Company.",
  "76.3 The Company may suspend accounts involved in chargeback disputes.",
  "76.4 The Client may be liable for fees associated with chargebacks.",
  "76.5 Fraudulent chargebacks may result in legal action.",
  "76.6 The Company reserves the right to recover disputed funds.",
  "76.7 The Client must contact the Company before initiating disputes.",
  "76.8 Chargeback policies are enforced to prevent abuse.",

  "77.1 The Company may apply netting to offset positions or obligations.",
  "77.2 Netting reduces exposure by combining multiple positions.",
  "77.3 The Client agrees to the application of netting where applicable.",
  "77.4 Netting may affect profit and loss calculations.",
  "77.5 The Company may determine netting methodology.",
  "77.6 The Client acknowledges associated risks.",
  "77.7 Netting is applied in accordance with market practices.",
  "77.8 The Company is not liable for outcomes of netting.",

  "78.1 Client funds are held in accordance with applicable regulations.",
  "78.2 Funds may be held in segregated accounts where required.",
  "78.3 The Company may use funds for operational purposes where permitted.",
  "78.4 The Client acknowledges risks associated with fund holding.",
  "78.5 The Company is not a bank and does not provide deposit guarantees.",
  "78.6 Client funds may be exposed to counterparty risk.",
  "78.7 The Company complies with regulatory safeguarding requirements.",
  "78.8 The Client accepts associated risks.",

  "79.1 Accounts with no activity for a specified period may be classified as dormant.",
  "79.2 Dormant accounts may be subject to inactivity fees.",
  "79.3 The Company may archive inactive accounts.",
  "79.4 The Client will be notified where required.",
  "79.5 Reactivation may require verification.",
  "79.6 Funds remain the property of the Client.",
  "79.7 The Company may close dormant accounts after a defined period.",
  "79.8 Policies comply with regulatory requirements.",

  "80.1 The Company may offer swap-free accounts in compliance with Islamic finance principles.",
  "80.2 Such accounts do not incur overnight interest charges.",
  "80.3 Alternative fees may apply.",
  "80.4 Eligibility criteria must be met.",
  "80.5 The Company may revoke swap-free status if misuse is detected.",
  "80.6 Terms may differ from standard accounts.",
  "80.7 The Client must comply with applicable conditions.",
  "80.8 The Company reserves the right to modify such accounts.",
];

// 81 - 90
const data9 = [
  "81.1 Certain instruments may be designated as swap-free.",
  "81.2 Conditions may vary depending on instrument and account type.",
  "81.3 The Company may apply alternative charges.",
  "81.4 Swap-free status may be temporary.",
  "81.5 Misuse may result in account adjustments.",
  "81.6 The Client must review instrument-specific terms.",
  "81.7 The Company may modify swap-free conditions.",
  "81.8 The Company is not liable for associated costs.",

  "82.1 The Company may act as a market maker in certain financial instruments offered through its platform.",
  "82.2 As a market maker, the Company may be the counterparty to Client trades.",
  "82.3 The Client acknowledges that this may create a conflict of interest.",
  "82.4 The Company implements internal policies to manage such conflicts fairly.",
  "82.5 Prices quoted may include spreads or mark-ups determined by the Company.",
  "82.6 The Company is not obligated to provide liquidity at all times.",
  "82.7 The Client accepts that market-making activities may impact execution conditions.",
  "82.8 The Company acts in good faith and in accordance with applicable regulations.",

  "83.1 The Company maintains policies to identify and manage conflicts of interest.",
  "83.2 Conflicts may arise between the Company, its employees, affiliates, and Clients.",
  "83.3 The Company seeks to mitigate conflicts through internal controls and procedures.",
  "83.4 Where conflicts cannot be avoided, they will be disclosed where appropriate.",
  "83.5 The Client acknowledges the existence of such potential conflicts.",
  "83.6 The Company does not guarantee that all conflicts will be eliminated.",
  "83.7 The Client agrees to proceed with transactions despite such conflicts.",
  "83.8 The Company acts in accordance with regulatory obligations in managing conflicts.",

  "84.1 Certain accounts may be managed by third parties or introduced by affiliates.",
  "84.2 The Client acknowledges that third-party managers act independently.",
  "84.3 The Company does not guarantee the performance of managed accounts.",
  "84.4 The Client is responsible for selecting and monitoring any third-party manager.",
  "84.5 The Company is not liable for actions taken by third-party managers.",
  "84.6 Introduced accounts may be subject to separate agreements.",
  "84.7 The Client acknowledges potential conflicts of interest in such arrangements.",
  "84.8 The Company reserves the right to terminate such arrangements at its discretion.",

  "85.1 The Client acknowledges that they have read and understood this Agreement in full.",
  "85.2 The Client confirms awareness of the risks associated with trading financial instruments.",
  "85.3 The Client accepts full responsibility for all trading decisions.",
  "85.4 The Client acknowledges that no guarantees of profit are provided.",
  "85.5 The Client confirms that they are not relying on any unauthorized representations.",
  "85.6 The Client understands that past performance is not indicative of future results.",
  "85.7 The Client agrees to comply with all terms and policies.",
  "85.8 These acknowledgements form an essential part of this Agreement.",

  "86.1 The Client represents that all information provided is accurate and truthful.",
  "86.2 The Client warrants that they have the legal authority to enter into this Agreement.",
  "86.3 The Client agrees to comply with all applicable laws and regulations.",
  "86.4 The Client shall not use the platform for unlawful activities.",
  "86.5 The Client undertakes to maintain accurate account information.",
  "86.6 The Client agrees to notify the Company of any material changes.",
  "86.7 Breach of these representations may result in account termination.",
  "86.8 The Company relies on these representations in providing services.",

  "87.1 The Company may disclose Client information where required by law or regulation.",
  "87.2 Disclosure may occur to regulatory authorities, law enforcement, or courts.",
  "87.3 The Company may share information with service providers for operational purposes.",
  "87.4 All disclosures are conducted in accordance with applicable data protection laws.",
  "87.5 The Client consents to such disclosures as part of this Agreement.",
  "87.6 The Company implements safeguards to protect Client information.",
  "87.7 Disclosure may occur without prior notice where legally required.",
  "87.8 The Company is not liable for lawful disclosures.",

  "88.1 The Company complies with the Foreign Account Tax Compliance Act (FATCA).",
  "88.2 The Client may be required to provide tax-related information.",
  "88.3 The Company may report Client information to relevant authorities.",
  "88.4 Failure to provide required information may result in account restrictions.",
  "88.5 The Client acknowledges obligations under international tax regulations.",
  "88.6 The Company is not responsible for Client tax compliance.",
  "88.7 The Client should seek independent tax advice.",
  "88.8 FATCA compliance is mandatory where applicable.",

  "89.1 The Company complies with the OECD Common Reporting Standard (CRS).",
  "89.2 The Client may be required to provide tax residency information.",
  "89.3 The Company may report financial account information to tax authorities.",
  "89.4 Reporting is conducted in accordance with applicable laws.",
  "89.5 The Client acknowledges their obligations under CRS.",
  "89.6 Failure to comply may result in account restrictions.",
  "89.7 The Company does not provide tax advice.",
  "89.8 The Client should consult independent advisors.",

  "90.1 The Company operates under applicable regulatory frameworks.",
  "90.2 The Client agrees to comply with all relevant regulations.",
  "90.3 Regulatory changes may impact services and conditions.",
  "90.4 The Company may take action to comply with regulatory requirements.",
  "90.5 The Client acknowledges that regulations may vary by jurisdiction.",
  "90.6 The Company may report suspicious activity.",
  "90.7 Compliance is mandatory for all Clients.",
  "90.8 The Company acts in accordance with its regulatory obligations.",
];

// 91 - 99
const data10 = [
  "91.1 The Client is responsible for all tax obligations arising from trading.",
  "91.2 The Company does not provide tax advice.",
  "91.3 Tax treatment depends on individual circumstances.",
  "91.4 The Client must report income to relevant authorities.",
  "91.5 The Company may provide reports for tax purposes.",
  "91.6 Withholding taxes may apply where required.",
  "91.7 The Client should seek independent advice.",
  "91.8 The Company is not liable for tax consequences.",

  "92.1 All intellectual property rights remain with the Company or its licensors.",
  "92.2 The Client is granted limited usage rights.",
  "92.3 Unauthorized use is prohibited.",
  "92.4 The Client shall not copy or distribute materials.",
  "92.5 The Company may enforce its rights legally.",
  "92.6 Trademarks must not be misused.",
  "92.7 Rights are protected under applicable laws.",
  "92.8 Violations may result in legal action.",

  "93.1 The Company processes personal data in accordance with its Privacy Policy.",
  "93.2 Data is collected for service provision and compliance.",
  "93.3 The Company implements security measures to protect data.",
  "93.4 The Client consents to data processing.",
  "93.5 Data may be shared with authorized third parties.",
  "93.6 The Client has rights under data protection laws.",
  "93.7 The Company complies with applicable regulations.",
  "93.8 Data protection is a priority for the Company.",

  "94.1 The Client has the right to submit complaints regarding the Company’s services.",
  "94.2 Complaints must be submitted through official communication channels.",
  "94.3 The Company will acknowledge receipt of complaints promptly.",
  "94.4 Complaints are handled in accordance with internal procedures.",
  "94.5 The Company aims to resolve complaints within a reasonable timeframe.",
  "94.6 The Client may escalate unresolved complaints to regulatory authorities.",
  "94.7 Records of complaints are maintained for compliance purposes.",
  "94.8 The Company is committed to fair and transparent complaint handling.",

  "95.1 Trading in financial instruments involves a high risk of loss.",
  "95.2 The Client may lose all or part of their invested capital.",
  "95.3 The Company does not guarantee profits or protection from losses.",
  "95.4 The Company is not liable for indirect or consequential damages.",
  "95.5 Liability is limited to the extent permitted by law.",
  "95.6 The Client accepts all trading risks.",
  "95.7 The Company is not responsible for market conditions.",
  "95.8 The Client agrees to these limitations.",

  "96.1 Services are provided “as is” without warranties.",
  "96.2 The Company does not guarantee uninterrupted service.",
  "96.3 No warranties of fitness for purpose are provided.",
  "96.4 The Client assumes all risks.",
  "96.5 The Company disclaims implied warranties.",
  "96.6 Services may contain errors.",
  "96.7 The Client accepts these conditions.",
  "96.8 Limitations apply to the fullest extent permitted.",

  "97.1 The Company disclaims liability for losses arising from use of services.",
  "97.2 This includes technical failures and market volatility.",
  "97.3 The Company is not liable for third-party actions.",
  "97.4 Liability is limited under applicable law.",
  "97.5 The Client agrees to these limitations.",
  "97.6 The Company is not responsible for indirect damages.",
  "97.7 The Client assumes all risks.",
  "97.8 This clause survives termination.",

  "98.1 The Client agrees to indemnify the Company against claims arising from their actions.",
  "98.2 This includes breaches of this Agreement.",
  "98.3 The Client covers legal costs and damages.",
  "98.4 Indemnity applies to third-party claims.",
  "98.5 The Company may enforce indemnity rights.",
  "98.6 The Client acknowledges these obligations.",
  "98.7 Indemnification survives termination.",
  "98.8 The clause is legally binding.",

  "99.1 The Client acknowledges that they have conducted independent evaluation.",
  "99.2 The Client is not relying on Company representations.",
  "99.3 All decisions are made independently.",
  "99.4 The Client understands associated risks.",
  "99.5 The Company does not provide guarantees.",
  "99.6 The Client accepts full responsibility.",
  "99.7 Independent judgment is required.",
  "99.8 This clause reinforces risk awareness.",
];
// 100 - 116
const data11 = [
  "100.1 An event of default occurs when the Client breaches any provision of this Agreement or fails to comply with applicable laws or regulations.",
  "100.2 Default may include failure to meet margin requirements, non-payment of fees, provision of false information, or engagement in prohibited trading practices.",
  "100.3 The Company may determine, in good faith, whether a default has occurred based on available information.",
  "100.4 The Client acknowledges that timely compliance with all obligations is essential to maintaining account status.",
  "100.5 Default may also arise from insolvency, bankruptcy, or legal incapacity of the Client.",
  "100.6 The Company may consider repeated minor breaches as a material default.",
  "100.7 The Client agrees to notify the Company of any circumstances that may lead to default.",
  "100.8 Default triggers the Company’s rights as outlined in this Agreement.",

  "101.1 Upon the occurrence of a default, the Company may take immediate action to protect its interests.",
  "101.2 Such actions may include suspension or termination of the Client’s account.",
  "101.3 The Company may close all or part of the Client’s open positions without prior notice.",
  "101.4 The Company may liquidate assets held in the Client’s account to cover outstanding obligations.",
  "101.5 The Company may refuse to execute further orders.",
  "101.6 Any losses resulting from such actions shall be borne by the Client.",
  "101.7 The Company may recover any outstanding balances owed by the Client.",
  "101.8 These rights are cumulative and may be exercised at the Company’s discretion.",

  "102.1 Either the Client or the Company may terminate the business relationship at any time, subject to applicable terms.",
  "102.2 The Client may request account closure by submitting a formal request through approved channels.",
  "102.3 The Company may terminate the relationship without prior notice in cases of breach, regulatory requirements, or risk concerns.",
  "102.4 Termination does not affect rights or obligations accrued prior to termination.",
  "102.5 The Company may refuse termination requests if obligations remain outstanding.",
  "102.6 The Client must ensure all positions are closed prior to termination where applicable.",
  "102.7 The Company may impose conditions for account closure.",
  "102.8 Termination procedures must comply with regulatory requirements.",

  "103.1 Upon termination, all open positions may be closed by the Company at prevailing market prices.",
  "103.2 The Client’s account balance will be adjusted to reflect final positions and obligations.",
  "103.3 Any outstanding fees or liabilities must be settled by the Client.",
  "103.4 Remaining funds may be returned to the Client subject to verification procedures.",
  "103.5 Access to the platform will be revoked upon account closure.",
  "103.6 Certain provisions of this Agreement shall survive termination.",
  "103.7 The Company may retain records in accordance with regulatory requirements.",
  "103.8 The Company is not liable for losses arising from forced liquidation upon termination.",

  "104.1 The Client may not assign or transfer their rights or obligations under this Agreement without prior written consent of the Company.",
  "104.2 The Company may assign its rights and obligations to affiliates or third parties.",
  "104.3 Any assignment shall not affect the validity of this Agreement.",
  "104.4 The Client agrees to cooperate with any such assignment.",
  "104.5 Unauthorized assignment by the Client is void.",
  "104.6 Assignment may be required for regulatory or operational purposes.",
  "104.7 The Company will notify Clients where required by law.",
  "104.8 This clause ensures continuity of service provision.",

  "105.1 Time shall be of the essence in relation to all obligations under this Agreement.",
  "105.2 The Client must perform all obligations promptly and within specified timeframes.",
  "105.3 Delays may result in financial losses or enforcement actions.",
  "105.4 The Company is not responsible for delays caused by the Client.",
  "105.5 Timely execution is critical in financial markets.",
  "105.6 The Client acknowledges the importance of deadlines.",
  "105.7 Failure to act in time may result in default.",
  "105.8 This clause reinforces operational efficiency.",

  "106.1 All notices shall be communicated electronically unless otherwise required by law.",
  "106.2 Notices may be sent via email, platform notifications, or official website announcements.",
  "106.3 The Client is responsible for maintaining updated contact details.",
  "106.4 Notices are deemed received upon transmission.",
  "106.5 The Company is not liable for missed communications due to incorrect contact details.",
  "106.6 The Client may send notices through approved communication channels.",
  "106.7 Certain notices may require acknowledgment.",
  "106.8 Communication records may be retained for compliance purposes.",

  "107.1 This Agreement shall be governed by and construed in accordance with the laws of Mauritius.",
  "107.2 Any disputes arising from this Agreement shall be subject to the jurisdiction of the courts of Mauritius.",
  "107.3 The Client agrees to submit to such jurisdiction.",
  "107.4 Regulatory matters may also involve relevant authorities.",
  "107.5 Applicable laws may vary depending on the Client’s location.",
  "107.6 The Company may take legal action in other jurisdictions if necessary.",
  "107.7 This clause ensures legal clarity and enforceability.",
  "107.8 Dispute resolution procedures may be outlined separately.",

  "108.1 This Agreement is drafted in the English language.",
  "108.2 Any translations are provided for convenience only.",
  "108.3 In case of discrepancies, the English version shall prevail.",
  "108.4 The Client agrees to rely on the English version.",
  "108.5 The Company is not liable for translation errors.",
  "108.6 Legal interpretation shall be based on the English text.",
  "108.7 The Client acknowledges understanding of the language.",
  "108.8 This ensures consistency in legal interpretation.",

  "109.1 The Company shall not be liable for failure to perform obligations due to events beyond its control.",
  "109.2 Such events include natural disasters, war, cyberattacks, or regulatory changes.",
  "109.3 Performance may be suspended during force majeure events.",
  "109.4 The Company will take reasonable steps to resume operations.",
  "109.5 The Client acknowledges risks associated with such events.",
  "109.6 The Company is not responsible for resulting losses.",
  "109.7 Force majeure events may affect service availability.",
  "109.8 This clause protects against unforeseen circumstances.",

  "110.1 Failure to enforce any provision does not constitute a waiver.",
  "110.2 Rights may be exercised at any time.",
  "110.3 Waivers must be in writing to be effective.",
  "110.4 Partial enforcement does not limit full rights.",
  "110.5 This clause preserves legal rights.",
  "110.6 The Client acknowledges these provisions.",
  "110.7 Waivers do not affect future enforcement.",
  "110.8 Legal protections remain intact.",

  "111.1 The Company’s rights and remedies are cumulative.",
  "111.2 Exercise of one remedy does not exclude others.",
  "111.3 Remedies may be exercised concurrently.",
  "111.4 This ensures full legal protection.",
  "111.5 The Client acknowledges these rights.",
  "111.6 Remedies are available under law and contract.",
  "111.7 This clause strengthens enforceability.",
  "111.8 All remedies remain valid.",

  "112.1 The Company operates in accordance with regulations set by the Financial Services Commission of Mauritius.",
  "112.2 The Client agrees to comply with all applicable regulatory requirements.",
  "112.3 Regulatory compliance may affect services and account conditions.",
  "112.4 The Company may take actions required by regulators.",
  "112.5 The Client acknowledges regulatory oversight.",
  "112.6 Compliance is mandatory for all Clients.",
  "112.7 The Company may report regulatory breaches.",
  "112.8 This ensures lawful operation of services.",

  "113.1 This Agreement does not confer rights on third parties.",
  "113.2 Only the Company and the Client have enforceable rights.",
  "113.3 Third parties may not claim benefits under this Agreement.",
  "113.4 This clause limits external claims.",
  "113.5 Exceptions may apply where required by law.",
  "113.6 The Client acknowledges this limitation.",
  "113.7 This ensures contractual clarity.",
  "113.8 Rights remain strictly between parties.",

  "114.1 The Company and the Client act as independent parties.",
  "114.2 Nothing in this Agreement creates a partnership or joint venture.",
  "114.3 Neither party may bind the other.",
  "114.4 The Client acts on their own behalf.",
  "114.5 The Company provides execution-only services.",
  "114.6 This clause clarifies the relationship.",
  "114.7 No agency relationship exists.",
  "114.8 Legal independence is maintained.",

  "115.1 This Agreement may be executed electronically in counterparts.",
  "115.2 Each counterpart is considered an original.",
  "115.3 Electronic execution is legally binding.",
  "115.4 Copies are considered valid evidence.",
  "115.5 This clause supports digital agreements.",
  "115.6 The Client acknowledges electronic validity.",
  "115.7 No physical signature is required.",
  "115.8 This ensures enforceability in digital format.",

  "116.9 FlipTrade Group Ltd complies with all applicable Anti-Money Laundering (AML), Counter-Terrorism Financing (CTF), and Know Your Customer (KYC) regulations under the laws of Mauritius and the Financial Services Commission (FSC) requirements.",
  "116.10 All users are required to complete identity verification procedures before accessing certain services, including deposits, withdrawals, and live trading functionality.",
  "116.11 Clients may be required to submit the following documents for verification purposes: (a) Government-issued photo identification (Passport, National ID Card, or Driver’s License); (b) Proof of residential address issued within the last three (3) months; (c) Additional documents requested for enhanced due diligence or compliance purposes.",
  "116.12 FlipTrade Group Ltd reserves the right to request additional information or documentation at any time to verify a client’s identity, source of funds, source of wealth, or financial activities.",
  "116.13 The Company may suspend, restrict, or terminate access to any account where verification requirements are not completed satisfactorily or where suspicious activity is detected.",
  "116.14 Withdrawal requests may be delayed or rejected until the identity verification process has been successfully completed.",
  "116.15 All information and documents collected during the KYC process shall be securely stored and processed in accordance with the Company’s Privacy Policy and applicable data protection laws.",
  "116.16 By using the services of FlipTrade Group Ltd, the Client agrees to comply with all identity verification and compliance procedures required by the Company.",
];

const allData = [
  ...data1,
  ...data2,
  ...data3,
  ...data4,
  ...data5,
  ...data6,
  ...data7,
  ...data8,
  ...data9,
  ...data10,
  ...data11,
];
const TermCondition = () => {
  return (
    <div>
      <div className="inn_container pt-5 md:pt-14">
        <div className="text-center">
          <Title
            title="Terms & Conditions"
            color="text-white"
            ish1={true}
          />
        </div>
        <div className="pt-5 md:pt-12 space-y-3">
          {allData.map((item, index) => (
            <p className="text-base 2xl:text-xl text-white font_ternary">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermCondition;
