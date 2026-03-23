
// â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const RAW_DATA = [{"ID_Opportunity":1,"Description":"Supply engineering support","Date_Creation":"2025-12-28","Week":52,"Source_Lead":"Internal Referral","Company":"Vale Paraupebas","Size_Company":"Big","Contact_Company":"Karine","Tax_ID":"33.592.510/0001-54","Segment":"Mining","Country":"Brasil","Estate":"ParÃ¡","City":"CarajÃ¡s","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Internal denial","Reason_Lost":"Scope exceeding our current capacity","Date_Actual_Stage":"2025-12-26","Days_on_Stage":80.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-06","OBS":"Set a call to Karine","RelationShip_With_Customer":"New Client","Urgency":"Low","Technical_Fit":"High risk","Budget":"Approved budget","Probability":0.365,"Type of service":"Man power Support","Currency":"BRL","Forecast _Date":"26_Q1","Estimated_Value":200000.0,"Forecast_Deal_Value":73000.0},{"ID_Opportunity":2,"Description":"Sis implemantation","Date_Creation":"2025-12-04","Week":49,"Source_Lead":"Internal Referral","Company":"Vale Paraupebas","Size_Company":"Big","Contact_Company":"Rosa","Tax_ID":"33.592.510/0001-54","Segment":"Mining","Country":"Brasil","Estate":"ParÃ¡","City":"CarajÃ¡s","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-04","Days_on_Stage":102.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-16","OBS":"Follow up with Rosa","RelationShip_With_Customer":"New Client","Urgency":"Medium","Technical_Fit":"Medium","Budget":"Estimated budget","Probability":0.38,"Type of service":"Functional Safety","Currency":"BRL","Forecast _Date":"26_Q2","Estimated_Value":200000.0,"Forecast_Deal_Value":76000.0},{"ID_Opportunity":3,"Description":"PPG steel panel maintenance support","Date_Creation":"2025-12-15","Week":51,"Source_Lead":"Internal Referral","Company":"Gerdau MaracanaÃº","Size_Company":"Medium","Contact_Company":"Joab","Tax_ID":"07.358.761/0013-00","Segment":"Steel Makings","Country":"Brasil","Estate":"CearÃ¡","City":"MaracanaÃº","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-15","Days_on_Stage":91.0,"Date_Last_Contact":"2026-03-13","Days_Since_Last_Contact":3,"Date_Next_Action":"2026-03-19","OBS":"Follow up with Joab","RelationShip_With_Customer":"First Technical contact","Urgency":"Low","Technical_Fit":"High","Budget":"Under definition","Probability":0.385,"Type of service":"Maintenance","Currency":"BRL","Forecast _Date":null,"Estimated_Value":50000.0,"Forecast_Deal_Value":19250.0},{"ID_Opportunity":4,"Description":"PPG steel column maintenance support","Date_Creation":"2025-12-16","Week":51,"Source_Lead":"Internal Referral","Company":"Gerdau Caucaia","Size_Company":"Medium","Contact_Company":"Joab","Tax_ID":"07.358.761/0013-00","Segment":"Steel Makings","Country":"Brasil","Estate":"CearÃ¡","City":"Caucaia","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-16","Days_on_Stage":90.0,"Date_Last_Contact":"2026-03-13","Days_Since_Last_Contact":3,"Date_Next_Action":"2026-03-19","OBS":"Follow up with Joab","RelationShip_With_Customer":"First Technical contact","Urgency":"Medium","Technical_Fit":"High","Budget":"Under definition","Probability":0.415,"Type of service":"Projects","Currency":"BRL","Forecast _Date":null,"Estimated_Value":50000.0,"Forecast_Deal_Value":20750.0},{"ID_Opportunity":5,"Description":null,"Date_Creation":"2025-12-30","Week":53,"Source_Lead":"Internal Referral","Company":"Arcelor Mittal PecÃ©m","Size_Company":"Big","Contact_Company":"Afonso Almeida","Tax_ID":"17.469.701/0001-77","Segment":"Steel Makings","Country":"Brasil","Estate":"CearÃ¡","City":"PecÃ©m","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-30","Days_on_Stage":76.0,"Date_Last_Contact":"2026-03-13","Days_Since_Last_Contact":3,"Date_Next_Action":"2026-03-17","OBS":"Follow up with the automation leader","RelationShip_With_Customer":"First Technical contact","Urgency":"High","Technical_Fit":"Fully compliant","Budget":"Estimated budget","Probability":0.5,"Type of service":"Projects","Currency":"BRL","Forecast _Date":null,"Estimated_Value":70000.0,"Forecast_Deal_Value":35000.0},{"ID_Opportunity":6,"Description":null,"Date_Creation":"2025-12-30","Week":53,"Source_Lead":"Internal Referral","Company":"Arcelor Mittal PecÃ©m","Size_Company":"Big","Contact_Company":"Afonso Almeida","Tax_ID":"17.469.701/0001-77","Segment":"Steel Makings","Country":"Brasil","Estate":"CearÃ¡","City":"PecÃ©m","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-30","Days_on_Stage":76.0,"Date_Last_Contact":"2026-03-13","Days_Since_Last_Contact":3,"Date_Next_Action":"2026-03-17","OBS":"Follow up with the automation leader","RelationShip_With_Customer":"First Technical contact","Urgency":"High","Technical_Fit":"Medium","Budget":"Under definition","Probability":0.42,"Type of service":"Projects","Currency":"BRL","Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":7,"Description":null,"Date_Creation":"2025-12-30","Week":53,"Source_Lead":"Internal Referral","Company":"Arcelor Mittal PecÃ©m","Size_Company":"Big","Contact_Company":"Afonso Almeida","Tax_ID":"17.469.701/0001-77","Segment":"Steel Makings","Country":"Brasil","Estate":"CearÃ¡","City":"PecÃ©m","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-30","Days_on_Stage":76.0,"Date_Last_Contact":"2026-03-13","Days_Since_Last_Contact":3,"Date_Next_Action":"2026-03-17","OBS":"Follow up with the automation leader","RelationShip_With_Customer":"First Technical contact","Urgency":"Medium","Technical_Fit":"High","Budget":"Under definition","Probability":0.415,"Type of service":"Projects","Currency":"BRL","Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":8,"Description":null,"Date_Creation":"2025-10-01","Week":40,"Source_Lead":"Internal Referral","Company":"Arcelor Mittal TubarÃ£o","Size_Company":"Big","Contact_Company":"CÃ©zar Guedes","Tax_ID":"17.469.701/0001-77","Segment":"Steel Makings","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-10-01","Days_on_Stage":166.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-10","OBS":"Follow up with Cezar","RelationShip_With_Customer":"First Technical contact","Urgency":"No urgency","Technical_Fit":"High risk","Budget":"No budget","Probability":0.185,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":9,"Description":null,"Date_Creation":"2025-12-23","Week":52,"Source_Lead":"Partners","Company":"Fortlev","Size_Company":"Medium","Contact_Company":"Franklin Douglas Leal","Tax_ID":"32.270.838/0001-91","Segment":"Chemicals","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Deal","Status":"Closed - Won","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-19","Days_on_Stage":56.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-02-05","OBS":"To monitor the execution of the work","RelationShip_With_Customer":"First Technical contact","Urgency":"High","Technical_Fit":"Fully compliant","Budget":"Approved budget","Probability":1.0,"Type of service":"Man power Support","Currency":"BRL","Forecast _Date":null,"Estimated_Value":20000.0,"Forecast_Deal_Value":20000.0},{"ID_Opportunity":10,"Description":null,"Date_Creation":"2025-10-29","Week":44,"Source_Lead":"External Demand","Company":"Reckitt","Size_Company":"Big","Contact_Company":"Shivani","Tax_ID":"59.557.124/0001-15","Segment":"Pharmaceutical","Country":"Brasil","Estate":"SÃ£o Paulo","City":"Raposo Tavares","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Negotiation","Status":"Closed - Lost","Reason_Lost":"Unavailability of our workforce","Date_Actual_Stage":"2026-01-08","Days_on_Stage":67.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-01-28","OBS":"Waiting for Shivani's next steps","RelationShip_With_Customer":"New Client","Urgency":"High","Technical_Fit":"Fully compliant","Budget":"Approved budget","Probability":0.0,"Type of service":"Cybersecurity","Currency":"USD","Forecast _Date":null,"Estimated_Value":4000.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":11,"Description":"Electrical and automation services","Date_Creation":"2025-12-15","Week":51,"Source_Lead":"Partners","Company":"Grupo TristÃ£o","Size_Company":"Medium","Contact_Company":"Rafael Ralta","Tax_ID":"28.154.847/0001-40","Segment":"Food/Beverage","Country":"Brasil","Estate":"Espirito Santo","City":"Viana","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-15","Days_on_Stage":91.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Follow up with Rafael Ralta","RelationShip_With_Customer":"First Technical contact","Urgency":"Low","Technical_Fit":"High risk","Budget":"No budget","Probability":0.275,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":12,"Description":null,"Date_Creation":"2025-12-18","Week":51,"Source_Lead":"Internal Referral","Company":"Ãgua Pedra Azul","Size_Company":"Medium","Contact_Company":"Bruno","Tax_ID":"31.495.252/0001-62","Segment":"Food/Beverage","Country":"Brasil","Estate":"Espirito Santo","City":"Marechal Floriano","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-18","Days_on_Stage":88.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Contact with Bruno","RelationShip_With_Customer":"New Client","Urgency":"No urgency","Technical_Fit":"High risk","Budget":"No budget","Probability":0.135,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":13,"Description":null,"Date_Creation":"2025-12-10","Week":50,"Source_Lead":"Internal Referral","Company":"Acelen","Size_Company":"Big","Contact_Company":"Alan Santos","Tax_ID":"41.777.706/0001-41","Segment":"Petrochemicals","Country":"Brasil","Estate":"Bahia","City":"SÃ£o Francisco do Conde","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-23","Days_on_Stage":83.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Send a message to Alan","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":14,"Description":null,"Date_Creation":"2026-01-09","Week":2,"Source_Lead":"Internal Referral","Company":"BiancogrÃªs","Size_Company":"Big","Contact_Company":"Alan Amorim Cardoso","Tax_ID":"02.077.546/0001-76","Segment":"General Industry","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-09","Days_on_Stage":66.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Schedule a visit with Alan","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":15,"Description":null,"Date_Creation":"2025-12-05","Week":49,"Source_Lead":"Internal Referral","Company":"Nater Coop - Vexgo","Size_Company":"Big","Contact_Company":"Thiago Schimidt","Tax_ID":"27.942.085/0001-08","Segment":"Food/Beverage","Country":"Brasil","Estate":"Espirito Santo","City":"Santa Maria de JetibÃ¡","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Closed - Lost","Reason_Lost":"There is no technical fit","Date_Actual_Stage":"2025-12-05","Days_on_Stage":101.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-01-28","OBS":"Follow up with Thiago","RelationShip_With_Customer":"New Client","Urgency":"Low","Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":16,"Description":null,"Date_Creation":"2025-12-22","Week":52,"Source_Lead":"External Referral","Company":"Supremo Cimentos","Size_Company":"Big","Contact_Company":"Raphael Ferreira","Tax_ID":"05.798.883/0001-80","Segment":"General Industry","Country":"Brasil","Estate":"ParanÃ¡","City":"AdrianÃ³polis","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Closed - Lost","Reason_Lost":"No client response","Date_Actual_Stage":"2025-12-29","Days_on_Stage":77.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-01-28","OBS":"To finalize quotation","RelationShip_With_Customer":"New Client","Urgency":"Medium","Technical_Fit":"High","Budget":"Estimated budget","Probability":0.0,"Type of service":"Projects","Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":17,"Description":null,"Date_Creation":"2025-12-29","Week":53,"Source_Lead":"External Referral","Company":"Votorantin","Size_Company":"Big","Contact_Company":"Raphael Ferreira","Tax_ID":"01.637.895/0001-32","Segment":"General Industry","Country":"Brasil","Estate":"Minas Gerais","City":"Pedro Leopoldo","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Lead","Status":"Closed - Lost","Reason_Lost":"No client response","Date_Actual_Stage":"2025-12-29","Days_on_Stage":77.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-01-28","OBS":"Follow up with Raphael","RelationShip_With_Customer":"New Client","Urgency":"No urgency","Technical_Fit":"High risk","Budget":"No budget","Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":18,"Description":null,"Date_Creation":null,"Week":null,"Source_Lead":"Internal Referral","Company":"Marbrasa","Size_Company":"Medium","Contact_Company":"Diego Laurent Nascimento","Tax_ID":"06.867.144/0001-26","Segment":"General Industry","Country":"Brasil","Estate":"Espirito Santo","City":"Colatina","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":19,"Description":null,"Date_Creation":null,"Week":null,"Source_Lead":"Internal Referral","Company":"MineraÃ§Ã£o Marianelli","Size_Company":"Medium","Contact_Company":"Julielson Pardim","Tax_ID":null,"Segment":"General Industry","Country":"Brasil","Estate":"Espirito Santo","City":"SÃ£o Domingos do Norte","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":20,"Description":null,"Date_Creation":null,"Week":null,"Source_Lead":"Internal Referral","Company":"Granex do Brasil","Size_Company":"Medium","Contact_Company":"Julielson Pardim","Tax_ID":null,"Segment":"General Industry","Country":"Brasil","Estate":"Espirito Santo","City":"SÃ£o Domingos do Norte","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":21,"Description":null,"Date_Creation":null,"Week":null,"Source_Lead":"Internal Referral","Company":"Guidoni Brasil","Size_Company":"Big","Contact_Company":"Philipe Zorzanelli","Tax_ID":null,"Segment":"General Industry","Country":"Brasil","Estate":"Espirito Santo","City":"SÃ£o Domingos do Norte","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":22,"Description":null,"Date_Creation":"2026-01-07","Week":2,"Source_Lead":"Internal Referral","Company":"Samarco","Size_Company":"Big","Contact_Company":"Walace Lorencini","Tax_ID":null,"Segment":"Mining","Country":"Brasil","Estate":"Espirito Santo","City":"Anchieta","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-07","Days_on_Stage":68.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":23,"Description":null,"Date_Creation":null,"Week":null,"Source_Lead":"Internal Referral","Company":"Perfil AlumÃ­nio do Brasil","Size_Company":"Medium","Contact_Company":"FlÃ¡vio Zucateli","Tax_ID":null,"Segment":"Metals","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Contact with Flavio","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":24,"Description":null,"Date_Creation":"2025-12-15","Week":51,"Source_Lead":"External Referral","Company":"Rockwell","Size_Company":"Big","Contact_Company":"FÃ¡bio Diniz Alvarenga","Tax_ID":null,"Segment":"Industrial Technology","Country":"Brasil","Estate":"Minas Gerais","City":"Belo Horizonte","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-11-12","Days_on_Stage":124.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Follow up with Fabio","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":25,"Description":null,"Date_Creation":"2025-11-12","Week":46,"Source_Lead":"External Referral","Company":"Rockwell","Size_Company":"Big","Contact_Company":"Robson Botelho","Tax_ID":null,"Segment":"Industrial Technology","Country":"Brasil","Estate":"Espirito Santo","City":"VItÃ³ria","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-11-12","Days_on_Stage":124.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Follow up","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":26,"Description":null,"Date_Creation":"2025-11-12","Week":46,"Source_Lead":"External Referral","Company":"Rockwell","Size_Company":"Big","Contact_Company":"Clayton Faria","Tax_ID":null,"Segment":"Industrial Technology","Country":"Brasil","Estate":"ParÃ¡","City":"BelÃ©m","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-11-12","Days_on_Stage":124.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Follow up","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":27,"Description":null,"Date_Creation":"2025-11-12","Week":46,"Source_Lead":"External Referral","Company":"Rockwell","Size_Company":"Big","Contact_Company":"JosÃ© Carlos Azevedo","Tax_ID":null,"Segment":"Industrial Technology","Country":"Brasil","Estate":"SÃ£o Paulo","City":"SÃ£o Paulo","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-12","Days_on_Stage":94.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Present the expertise about tires","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":28,"Description":null,"Date_Creation":"2025-11-12","Week":46,"Source_Lead":"External Referral","Company":"Rockwell","Size_Company":"Big","Contact_Company":"Belchior Ferreira","Tax_ID":null,"Segment":"Industrial Technology","Country":"Brasil","Estate":"Minas Gerais","City":"Belo Horizonte","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-11-12","Days_on_Stage":124.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Follow up","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":29,"Description":null,"Date_Creation":"2025-11-12","Week":46,"Source_Lead":"External Referral","Company":"Rockwell","Size_Company":"Big","Contact_Company":"Josue Rivera","Tax_ID":null,"Segment":"Industrial Technology","Country":"Puerto Rico","Estate":"Puerto Rico","City":"Guaynabo","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-22","Days_on_Stage":84.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Get new info from Srini and Kiraj","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":30,"Description":null,"Date_Creation":null,"Week":null,"Source_Lead":"Internal Referral","Company":"Remazel","Size_Company":"Big","Contact_Company":"Andrea Fretti","Tax_ID":null,"Segment":"Oil & Gas","Country":"Brasil","Estate":"Rio de Janeiro","City":"Rio de Janeiro","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Deal","Status":"Closed - Won","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-06","Days_on_Stage":69.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-01-08","OBS":"To Develop after salles pattern","RelationShip_With_Customer":"Estrategic_Customer","Urgency":"High","Technical_Fit":"Fully compliant","Budget":"Approved budget","Probability":1.0,"Type of service":"Maintenance","Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":31,"Description":null,"Date_Creation":"2025-12-02","Week":49,"Source_Lead":"Internal Referral","Company":"Remazel","Size_Company":"Big","Contact_Company":"Andrea Fretti","Tax_ID":null,"Segment":"Oil & Gas","Country":"Brasil","Estate":"Rio de Janeiro","City":"Rio de Janeiro","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Closed - Lost","Reason_Lost":"No client response","Date_Actual_Stage":"2025-12-02","Days_on_Stage":104.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-01-06","OBS":"Follow up with Andrea","RelationShip_With_Customer":"Estrategic_Customer","Urgency":"No urgency","Technical_Fit":"Fully compliant","Budget":"No budget","Probability":0.0,"Type of service":"Maintenance","Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":32,"Description":null,"Date_Creation":"2025-11-18","Week":47,"Source_Lead":"Internal Referral","Company":"Modec","Size_Company":"Big","Contact_Company":"Anderson Ferro","Tax_ID":null,"Segment":"Oil & Gas","Country":"Brasil","Estate":"Rio de Janeiro","City":"Rio de Janeiro","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-22","Days_on_Stage":84.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Waiting for Mani feedback","RelationShip_With_Customer":"Estrategic_Customer","Urgency":"Medium","Technical_Fit":"Fully compliant","Budget":"Under definition","Probability":0.58,"Type of service":"Cybersecurity","Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":33,"Description":null,"Date_Creation":"2025-12-04","Week":49,"Source_Lead":"Partners","Company":"Imetame","Size_Company":"Big","Contact_Company":"Geraldo Magela","Tax_ID":null,"Segment":"General Industry","Country":"Brasil","Estate":"Espirito Santo","City":"Aracruz","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-04","Days_on_Stage":102.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-06","OBS":"Follow-up with Patrick","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":34,"Description":null,"Date_Creation":"2025-11-26","Week":48,"Source_Lead":"Network Search","Company":"Bravante","Size_Company":"Medium","Contact_Company":"Samuel Lacerda","Tax_ID":null,"Segment":"Oil & Gas","Country":"Brasil","Estate":"Rio de Janeiro","City":"Rio de Janeiro","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-11","Days_on_Stage":95.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Complete the registration / Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":35,"Description":"Automation and robotics services","Date_Creation":"2025-11-24","Week":48,"Source_Lead":"Internal Referral","Company":"Fibrasa","Size_Company":"Medium","Contact_Company":"Thiago Curvello","Tax_ID":null,"Segment":"Chemicals","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Internal denial","Reason_Lost":"Scope exceeding our current capacity","Date_Actual_Stage":"2026-01-08","Days_on_Stage":67.0,"Date_Last_Contact":"2026-03-13","Days_Since_Last_Contact":3,"Date_Next_Action":"2026-03-13","OBS":"Send a email to Thiago","RelationShip_With_Customer":"First Technical contact","Urgency":"High","Technical_Fit":"High risk","Budget":"Estimated budget","Probability":0.435,"Type of service":"Digital Tranformation","Currency":"BRL","Forecast _Date":null,"Estimated_Value":40000.0,"Forecast_Deal_Value":17400.0},{"ID_Opportunity":36,"Description":null,"Date_Creation":"2025-05-02","Week":18,"Source_Lead":"Partners","Company":"Fortlev","Size_Company":"Medium","Contact_Company":"Franklin Douglas Leal","Tax_ID":"32.270.838/0001-91","Segment":"Chemicals","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Negotiation","Status":"Closed - Lost","Reason_Lost":"NA","Date_Actual_Stage":"2026-02-10","Days_on_Stage":34.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-02-10","OBS":"Follow up with Franklin","RelationShip_With_Customer":"Worked once","Urgency":"High","Technical_Fit":"Fully compliant","Budget":"Approved budget","Probability":0.0,"Type of service":"Man power Support","Currency":"BRL","Forecast _Date":null,"Estimated_Value":11000.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":37,"Description":null,"Date_Creation":"2025-12-02","Week":49,"Source_Lead":"Internal Referral","Company":"Clariant","Size_Company":"Medium","Contact_Company":"Lucas Rezende","Tax_ID":null,"Segment":"Mining","Country":"Brasil","Estate":"SÃ£o Paulo","City":"SÃ£o JosÃ© dos Campos","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-02","Days_on_Stage":104.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":"BRL","Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":38,"Description":null,"Date_Creation":"2025-11-10","Week":46,"Source_Lead":"Internal Referral","Company":"Altus","Size_Company":"Medium","Contact_Company":"Renato de Souza","Tax_ID":null,"Segment":"Industrial Automation","Country":"India","Estate":null,"City":null,"Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Lead","Status":"Closed - Lost","Reason_Lost":"No client response","Date_Actual_Stage":"2025-11-11","Days_on_Stage":125.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2025-11-24","OBS":"Follow up with Renato","RelationShip_With_Customer":"Repeat Customer","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":39,"Description":null,"Date_Creation":"2025-12-18","Week":51,"Source_Lead":"Internal Referral","Company":"Arcelor Mittal PecÃ©m","Size_Company":"Big","Contact_Company":"Luiz Matos","Tax_ID":"17.469.701/0001-77","Segment":"Steel Makings","Country":"Brasil","Estate":"CearÃ¡","City":"PecÃ©m","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-23","Days_on_Stage":83.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-10","OBS":"Follow up with Luiz","RelationShip_With_Customer":"First Technical contact","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":"Maintenance","Currency":"BRL","Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":40,"Description":null,"Date_Creation":"2025-12-18","Week":51,"Source_Lead":"Internal Referral","Company":"Arcelor Mittal PecÃ©m","Size_Company":"Big","Contact_Company":"Luiz Matos","Tax_ID":"17.469.701/0001-77","Segment":"Steel Makings","Country":"Brasil","Estate":"CearÃ¡","City":"PecÃ©m","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-23","Days_on_Stage":83.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-10","OBS":"Follow up with Luiz","RelationShip_With_Customer":"First Technical contact","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":"Projects","Currency":"BRL","Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":41,"Description":null,"Date_Creation":"2025-12-18","Week":51,"Source_Lead":"Internal Referral","Company":"Arcelor Mittal PecÃ©m","Size_Company":"Big","Contact_Company":"Luiz Matos","Tax_ID":"17.469.701/0001-77","Segment":"Steel Makings","Country":"Brasil","Estate":"CearÃ¡","City":"PecÃ©m","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-23","Days_on_Stage":83.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-10","OBS":"Follow up with Luiz","RelationShip_With_Customer":"First Technical contact","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":"Man power Support","Currency":"BRL","Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":42,"Description":null,"Date_Creation":"2025-12-18","Week":51,"Source_Lead":"Internal Referral","Company":"Arcelor Mittal PecÃ©m","Size_Company":"Big","Contact_Company":"Luiz Matos","Tax_ID":"17.469.701/0001-77","Segment":"Steel Makings","Country":"Brasil","Estate":"CearÃ¡","City":"PecÃ©m","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-23","Days_on_Stage":83.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-10","OBS":"Follow up with Luiz","RelationShip_With_Customer":"First Technical contact","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":"Integration","Currency":"BRL","Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":43,"Description":null,"Date_Creation":"2026-01-06","Week":2,"Source_Lead":"Internal Referral","Company":"Arcelor Mittal PecÃ©m","Size_Company":"Big","Contact_Company":"Jefferson Oliveira","Tax_ID":"17.469.701/0001-77","Segment":"Steel Makings","Country":"Brasil","Estate":"CearÃ¡","City":"PecÃ©m","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-06","Days_on_Stage":69.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-10","OBS":"Follow up with Jefferson","RelationShip_With_Customer":"First Technical contact","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":"BRL","Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":44,"Description":"Cyber and automation services","Date_Creation":"2025-12-03","Week":49,"Source_Lead":"Internal Referral","Company":"Petrobras","Size_Company":"Big","Contact_Company":"JosÃ© Yuri Neves","Tax_ID":null,"Segment":"Oil & Gas","Country":"Brasil","Estate":"Rio de Janeiro","City":"Rio de Janeiro","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-27","Days_on_Stage":48.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Follow up with JosÃ© Yuri","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":"BRL","Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":45,"Description":null,"Date_Creation":"2026-01-07","Week":2,"Source_Lead":"Internal Referral","Company":"Casa do Serralheiro","Size_Company":"Big","Contact_Company":null,"Tax_ID":null,"Segment":"Other","Country":"Brasil","Estate":"Espirito Santo","City":"Viana","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Lead","Status":"Closed - Lost","Reason_Lost":"Company undergoing judicial reorganization","Date_Actual_Stage":"2026-01-07","Days_on_Stage":68.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-01-08","OBS":"Follow up","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":46,"Description":"Georgia cyber security","Date_Creation":"2026-01-08","Week":2,"Source_Lead":"External Demand","Company":"Essway","Size_Company":"Big","Contact_Company":"Shivani","Tax_ID":null,"Segment":null,"Country":"Georgia","Estate":null,"City":null,"Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-08","Days_on_Stage":67.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-16","OBS":"Follow up with Shivani","RelationShip_With_Customer":"First Technical contact","Urgency":"High","Technical_Fit":"Fully compliant","Budget":"Estimated budget","Probability":0.5,"Type of service":"Man power Support","Currency":"USD","Forecast _Date":"26_Q1","Estimated_Value":50000.0,"Forecast_Deal_Value":25000.0},{"ID_Opportunity":47,"Description":null,"Date_Creation":"2026-01-09","Week":2,"Source_Lead":"Internal Referral","Company":"ParaguaÃ§u TÃªxtil","Size_Company":"Medium","Contact_Company":"Tiago Mello","Tax_ID":null,"Segment":"General Industry","Country":"Brasil","Estate":"Minas Gerais","City":"ParaguaÃ§u","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-08","Days_on_Stage":67.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":48,"Description":null,"Date_Creation":"2025-11-24","Week":48,"Source_Lead":"Internal Referral","Company":"Autoglass","Size_Company":"Medium","Contact_Company":"Josiane","Tax_ID":null,"Segment":"General Industry","Country":"Brasil","Estate":"Espirito Santo","City":"Vila Velha","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Lead","Status":"Closed - Lost","Reason_Lost":"No client response","Date_Actual_Stage":"2025-11-24","Days_on_Stage":112.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-01-28","OBS":"Follow up with Josiane","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":49,"Description":null,"Date_Creation":"2026-01-14","Week":3,"Source_Lead":"External Referral","Company":"FAC Engenharia","Size_Company":"Small","Contact_Company":"Felipe","Tax_ID":null,"Segment":"Oil & Gas","Country":"Brasil","Estate":"Espirito Santo","City":"Vila Velha","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-14","Days_on_Stage":61.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Try to schedule a meeting","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":50,"Description":null,"Date_Creation":"2026-01-14","Week":3,"Source_Lead":"External Referral","Company":"DeepSea","Size_Company":"Small","Contact_Company":"Woodson","Tax_ID":null,"Segment":"Oil & Gas","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-14","Days_on_Stage":61.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":51,"Description":null,"Date_Creation":"2026-01-15","Week":3,"Source_Lead":"External Referral","Company":"FOCO Ambiente","Size_Company":"Small","Contact_Company":"Diogo","Tax_ID":null,"Segment":"Petrochemicals","Country":"Brasil","Estate":"Espirito Santo","City":"VitÃ³ria","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-16","Days_on_Stage":59.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Set a visit with Diogo","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":52,"Description":null,"Date_Creation":"2026-01-15","Week":3,"Source_Lead":"External Referral","Company":"EJA","Size_Company":"Small","Contact_Company":"Davi","Tax_ID":null,"Segment":"Other","Country":"Brasil","Estate":"Espirito Santo","City":null,"Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Closed - Lost","Reason_Lost":"No client response","Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-02-26","OBS":"Contact with Davi","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":53,"Description":null,"Date_Creation":"2026-01-15","Week":3,"Source_Lead":"Internal Referral","Company":"Innovare","Size_Company":"Small","Contact_Company":"Rodrigo Salvador","Tax_ID":null,"Segment":"Ornamental Rocks","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-08","OBS":"Follow up with Rodrigo","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":54,"Description":null,"Date_Creation":null,"Week":null,"Source_Lead":"External Referral","Company":"BiancogrÃªs","Size_Company":"Big","Contact_Company":"Thiago Casoti","Tax_ID":"02.077.546/0001-76","Segment":"General Industry","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":55,"Description":"Feed bagging automation","Date_Creation":"2026-01-16","Week":3,"Source_Lead":"External Referral","Company":"Nater Coop - Coopeavi","Size_Company":"Big","Contact_Company":"Ederson","Tax_ID":null,"Segment":"Food/Beverage","Country":"Brasil","Estate":"Espirito Santo","City":"Baixo Guandu","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Internal denial","Reason_Lost":"Strategic fit goal","Date_Actual_Stage":"2026-01-16","Days_on_Stage":59.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":56,"Description":null,"Date_Creation":"2026-01-16","Week":3,"Source_Lead":"External Referral","Company":"Nater Coop - Veneza","Size_Company":"Big","Contact_Company":"Bernardo","Tax_ID":null,"Segment":"Food/Beverage","Country":"Brasil","Estate":"Espirito Santo","City":"Nova Venezia","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-16","Days_on_Stage":59.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-06","OBS":"Meeting at 14:00 (London Office)","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":57,"Description":null,"Date_Creation":"2026-01-16","Week":3,"Source_Lead":"External Referral","Company":"Nater Coop - Liva","Size_Company":"Big","Contact_Company":"Altemir","Tax_ID":null,"Segment":"Food/Beverage","Country":"Brasil","Estate":"Espirito Santo","City":"Santa Maria de JetibÃ¡","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-16","Days_on_Stage":59.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":58,"Description":"Panel compliance with the technical report","Date_Creation":"2026-01-16","Week":3,"Source_Lead":"Partners","Company":"Skystone","Size_Company":"Medium","Contact_Company":"Millena SIlva","Tax_ID":null,"Segment":"Ornamental Rocks","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Negotiation","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-02-09","Days_on_Stage":35.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-13","OBS":"Waiting for Skystone signature","RelationShip_With_Customer":"New Client","Urgency":"High","Technical_Fit":"Fully compliant","Budget":"Approved budget","Probability":0.64,"Type of service":"Man power Support","Currency":"BRL","Forecast _Date":"26_Q1","Estimated_Value":15300.0,"Forecast_Deal_Value":9792.0},{"ID_Opportunity":59,"Description":null,"Date_Creation":"2026-01-21","Week":4,"Source_Lead":"Internal Referral","Company":"GS Inima","Size_Company":"Big","Contact_Company":"Vitor Renoldi","Tax_ID":null,"Segment":"Power & Utilities","Country":"Brasil","Estate":"Espirito Santo","City":"VitÃ³ria","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-19","Days_on_Stage":56.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Follow up with Vitor","RelationShip_With_Customer":"New Client","Urgency":"Medium","Technical_Fit":"Medium","Budget":"No budget","Probability":0.22,"Type of service":"Maintenance","Currency":"BRL","Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":60,"Description":"Cyber and automation services","Date_Creation":"2026-01-16","Week":3,"Source_Lead":"Partners","Company":"SIMEC","Size_Company":"Big","Contact_Company":"Elio","Tax_ID":"29.617.631/0001-36","Segment":"Steel Makings","Country":"Brasil","Estate":"Espirito Santo","City":"Cariacica","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-02-11","Days_on_Stage":33.0,"Date_Last_Contact":"2026-03-13","Days_Since_Last_Contact":3,"Date_Next_Action":"2026-03-16","OBS":"Follow up with Elio","RelationShip_With_Customer":"New Client","Urgency":"Low","Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":61,"Description":null,"Date_Creation":"2026-01-16","Week":3,"Source_Lead":"Partners","Company":"Suncoke","Size_Company":"Big","Contact_Company":"Victor","Tax_ID":"07.114.605/0001-52","Segment":"Steel Makings","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-16","Days_on_Stage":59.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Try a contact with Victor","RelationShip_With_Customer":"New Client","Urgency":"Low","Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":62,"Description":null,"Date_Creation":"2026-01-16","Week":3,"Source_Lead":"Partners","Company":"BiancogrÃªs","Size_Company":"Big","Contact_Company":"Saulo","Tax_ID":"02.077.546/0001-76","Segment":"General Industry","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-16","Days_on_Stage":59.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-06","OBS":"Follow-up with Patrick","RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":63,"Description":null,"Date_Creation":"2026-01-16","Week":3,"Source_Lead":"Partners","Company":"Novapol","Size_Company":"Medium","Contact_Company":"Patrick","Tax_ID":null,"Segment":"Chemicals","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-16","Days_on_Stage":59.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-06","OBS":"Follow-up with Patrick","RelationShip_With_Customer":"New Client","Urgency":"Low","Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":64,"Description":null,"Date_Creation":"2026-01-21","Week":4,"Source_Lead":"Partners","Company":"IKM","Size_Company":"Small","Contact_Company":"Julio Lins","Tax_ID":null,"Segment":"General Industry","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-21","Days_on_Stage":54.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":"Low","Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":65,"Description":null,"Date_Creation":"2026-01-23","Week":4,"Source_Lead":"Partners","Company":"Brasigran","Size_Company":"Medium","Contact_Company":"Ronaldo","Tax_ID":null,"Segment":"Ornamental Rocks","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-01-23","Days_on_Stage":52.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-06","OBS":"Follow-up with Patrick","RelationShip_With_Customer":"New Client","Urgency":"Low","Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":66,"Description":null,"Date_Creation":"2026-02-02","Week":6,"Source_Lead":"Internal Referral","Company":"Vale VitÃ³ria","Size_Company":"Big","Contact_Company":"Christiane Felippe","Tax_ID":null,"Segment":"Mining","Country":"Brasil","Estate":"Espirito Santo","City":"VitÃ³ria","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Lead","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-02-02","Days_on_Stage":42.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-04","OBS":"Follow up with Christiane / Review the strategy for this client","RelationShip_With_Customer":"New Client","Urgency":"High","Technical_Fit":"Medium","Budget":"No budget","Probability":0.25,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":67,"Description":null,"Date_Creation":"2025-02-20","Week":8,"Source_Lead":null,"Company":"Rane Engine Valves","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":68,"Description":null,"Date_Creation":"2025-02-24","Week":9,"Source_Lead":null,"Company":"Atc Yokohoma","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":69,"Description":null,"Date_Creation":"2025-02-25","Week":9,"Source_Lead":"External Demand","Company":"BASF Catalysts India Pvt Ltd","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":70,"Description":null,"Date_Creation":"2025-03-03","Week":10,"Source_Lead":"External Demand","Company":"BASF Catalysts India Pvt Ltd","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":71,"Description":null,"Date_Creation":"2025-03-07","Week":10,"Source_Lead":null,"Company":"Nandhie Enterprieses","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":72,"Description":null,"Date_Creation":"2025-03-09","Week":10,"Source_Lead":"External Demand","Company":"Dinex Emission India Pvt Ltd","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":73,"Description":null,"Date_Creation":"2025-03-10","Week":11,"Source_Lead":"External Demand","Company":"Yokohama tyres, vizag","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":74,"Description":null,"Date_Creation":"2025-03-11","Week":11,"Source_Lead":null,"Company":"EVS Automation","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":75,"Description":null,"Date_Creation":"2025-03-12","Week":11,"Source_Lead":null,"Company":"EVS Automation","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":76,"Description":null,"Date_Creation":"2025-03-13","Week":11,"Source_Lead":null,"Company":"United Breweries Limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":77,"Description":null,"Date_Creation":"2025-03-14","Week":11,"Source_Lead":"Internal Referral","Company":"Yokohama Tyres, Tirunelveli","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":78,"Description":null,"Date_Creation":"2025-03-15","Week":11,"Source_Lead":"Internal Referral","Company":"JK Tyres","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":79,"Description":null,"Date_Creation":"2025-03-16","Week":11,"Source_Lead":"Internal Referral","Company":"TVS Chakra","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":80,"Description":null,"Date_Creation":"2025-03-17","Week":12,"Source_Lead":"Internal Referral","Company":"TVS Chakra","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":81,"Description":null,"Date_Creation":"2025-05-05","Week":19,"Source_Lead":"External Demand","Company":"Dinex Emission India Pvt Ltd","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":82,"Description":null,"Date_Creation":"2025-05-21","Week":21,"Source_Lead":"External Referral","Company":"TTK health care limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":83,"Description":null,"Date_Creation":"2025-05-22","Week":21,"Source_Lead":"External Referral","Company":"TTK health care limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":84,"Description":null,"Date_Creation":"2025-05-22","Week":21,"Source_Lead":"External Referral","Company":"Rane Engine Valves","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":85,"Description":null,"Date_Creation":"2025-05-29","Week":22,"Source_Lead":"External Referral","Company":"TTK protective device .","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":86,"Description":null,"Date_Creation":"2025-06-29","Week":26,"Source_Lead":"External Referral","Company":"Gulf OIL","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":87,"Description":null,"Date_Creation":"2025-06-04","Week":23,"Source_Lead":null,"Company":"ITC Snack - MYSORE","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":88,"Description":null,"Date_Creation":"2025-06-11","Week":24,"Source_Lead":null,"Company":"Meccanotechnica","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":89,"Description":null,"Date_Creation":"2025-08-14","Week":33,"Source_Lead":null,"Company":"Heritage Foods","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":90,"Description":null,"Date_Creation":"2025-08-14","Week":33,"Source_Lead":null,"Company":"Sundaram Fastners","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":91,"Description":null,"Date_Creation":"2025-08-14","Week":33,"Source_Lead":null,"Company":"Sundaram Fastners","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":92,"Description":null,"Date_Creation":"2025-08-14","Week":33,"Source_Lead":null,"Company":"Sundaram Fastners","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":93,"Description":null,"Date_Creation":"2025-08-19","Week":34,"Source_Lead":"External Demand","Company":"Nemak","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":94,"Description":null,"Date_Creation":"2025-08-19","Week":34,"Source_Lead":"External Demand","Company":"Nemak","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":95,"Description":null,"Date_Creation":"2025-08-19","Week":34,"Source_Lead":"External Demand","Company":"Nemak","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":96,"Description":null,"Date_Creation":"2025-08-19","Week":34,"Source_Lead":"External Demand","Company":"Nemak","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":97,"Description":null,"Date_Creation":"2025-08-19","Week":34,"Source_Lead":null,"Company":"Jasmine","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":98,"Description":null,"Date_Creation":"2025-08-18","Week":34,"Source_Lead":null,"Company":"TTK","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":99,"Description":null,"Date_Creation":"2025-08-20","Week":34,"Source_Lead":null,"Company":"Kobelco industrial machinery india","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":100,"Description":null,"Date_Creation":"2025-08-20","Week":34,"Source_Lead":null,"Company":"Jasmine","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":101,"Description":null,"Date_Creation":"2025-08-20","Week":34,"Source_Lead":null,"Company":"Jasmine","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":102,"Description":null,"Date_Creation":"2025-08-21","Week":34,"Source_Lead":"External Referral","Company":"Myunghwa Automotive India Private Limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":103,"Description":null,"Date_Creation":"2025-08-21","Week":34,"Source_Lead":"External Referral","Company":"Naga Detergent Limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":104,"Description":null,"Date_Creation":"2025-08-22","Week":34,"Source_Lead":"External Referral","Company":"ITC - Mysore","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":105,"Description":null,"Date_Creation":"2025-08-22","Week":34,"Source_Lead":"External Referral","Company":"ITC - Mysore","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":106,"Description":null,"Date_Creation":"2025-08-25","Week":35,"Source_Lead":"External Referral","Company":"Naga Detergent Limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":107,"Description":null,"Date_Creation":"2025-08-26","Week":35,"Source_Lead":"External Referral","Company":"Naga Detergent Limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":108,"Description":null,"Date_Creation":"2025-08-26","Week":35,"Source_Lead":"External Referral","Company":"MTC - Polimer","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":109,"Description":null,"Date_Creation":"2025-08-26","Week":35,"Source_Lead":"External Referral","Company":"Arasan Alumini","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":110,"Description":null,"Date_Creation":"2025-08-26","Week":35,"Source_Lead":null,"Company":"Sundaram Industries - Bs 20","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":111,"Description":null,"Date_Creation":"2025-09-01","Week":36,"Source_Lead":null,"Company":"Tvs Srichakra - Euro Grip Trips","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":112,"Description":null,"Date_Creation":"2025-09-10","Week":37,"Source_Lead":null,"Company":"Tvs- SI Air Spring","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":113,"Description":null,"Date_Creation":"2025-09-05","Week":36,"Source_Lead":null,"Company":"Tvs Srichakra - Euro Grip Trips","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":114,"Description":null,"Date_Creation":"2025-09-16","Week":38,"Source_Lead":"External Demand","Company":"Nemak","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":115,"Description":null,"Date_Creation":"2025-09-16","Week":38,"Source_Lead":"External Demand","Company":"Nemak","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":116,"Description":null,"Date_Creation":"2025-09-16","Week":38,"Source_Lead":null,"Company":"J.k Fenner","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":117,"Description":null,"Date_Creation":"2025-09-16","Week":38,"Source_Lead":"External Referral","Company":"J.k Fenner","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":118,"Description":null,"Date_Creation":"2025-09-16","Week":38,"Source_Lead":"External Referral","Company":"J.k Fenner","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":119,"Description":null,"Date_Creation":"2025-09-16","Week":38,"Source_Lead":"External Referral","Company":"J.k Fenner","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":120,"Description":null,"Date_Creation":"2025-09-16","Week":38,"Source_Lead":"External Referral","Company":"J.k Fenner","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":121,"Description":null,"Date_Creation":"2025-09-16","Week":38,"Source_Lead":"External Referral","Company":"Bharat Rubber","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":122,"Description":null,"Date_Creation":"2025-09-16","Week":38,"Source_Lead":null,"Company":"Caparo","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":123,"Description":null,"Date_Creation":"2025-09-16","Week":38,"Source_Lead":null,"Company":"Caparo","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":124,"Description":null,"Date_Creation":"2025-09-20","Week":38,"Source_Lead":"External Demand","Company":"Naga Detergent","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":125,"Description":null,"Date_Creation":"2025-09-20","Week":38,"Source_Lead":"External Demand","Company":"Naga Detergent","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":126,"Description":null,"Date_Creation":"2025-09-20","Week":38,"Source_Lead":"External Demand","Company":"Naga Detergent","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":127,"Description":null,"Date_Creation":"2025-09-20","Week":38,"Source_Lead":"External Demand","Company":"jacobi Carbon","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":128,"Description":null,"Date_Creation":"2025-09-20","Week":38,"Source_Lead":null,"Company":"Caparo","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":129,"Description":null,"Date_Creation":"2025-09-20","Week":38,"Source_Lead":null,"Company":"Rane Engine Valves","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":130,"Description":null,"Date_Creation":"2025-10-22","Week":43,"Source_Lead":"External Referral","Company":"Nippon Thermostat (India) Limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":131,"Description":null,"Date_Creation":"2025-10-22","Week":43,"Source_Lead":"External Referral","Company":"Nippon Thermostat (India) Limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":132,"Description":null,"Date_Creation":"2025-11-26","Week":48,"Source_Lead":"External Demand","Company":"Brakes India","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":133,"Description":null,"Date_Creation":"2025-11-26","Week":48,"Source_Lead":"External Demand","Company":"Royal Enfield","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":134,"Description":null,"Date_Creation":"2025-10-30","Week":44,"Source_Lead":"External Demand","Company":"Apollo Tyres, Oragadam","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":135,"Description":null,"Date_Creation":"2025-10-30","Week":44,"Source_Lead":"External Demand","Company":"Apollo Tyres, Oragadam","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":136,"Description":null,"Date_Creation":"2025-11-03","Week":45,"Source_Lead":"External Demand","Company":"ILJIN AUTOMOTIVE PRIVATE LIMITED","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":137,"Description":null,"Date_Creation":"2025-11-05","Week":45,"Source_Lead":"External Demand","Company":"Medopharam","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":138,"Description":null,"Date_Creation":"2025-11-05","Week":45,"Source_Lead":"External Demand","Company":"Lear Automotive India Private Ltd","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":139,"Description":null,"Date_Creation":"2025-11-17","Week":47,"Source_Lead":"External Demand","Company":"Madras Pharmaceuticals","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":140,"Description":null,"Date_Creation":"2025-11-18","Week":47,"Source_Lead":"External Demand","Company":"Thejo Engineering Limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":141,"Description":null,"Date_Creation":"2025-11-19","Week":47,"Source_Lead":"External Referral","Company":"BPCL","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":142,"Description":null,"Date_Creation":"2025-11-19","Week":47,"Source_Lead":"External Referral","Company":"BPCL","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":143,"Description":null,"Date_Creation":"2025-11-19","Week":47,"Source_Lead":"External Referral","Company":"BPCL","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":144,"Description":null,"Date_Creation":"2025-11-19","Week":47,"Source_Lead":"External Referral","Company":"BPCL","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":145,"Description":null,"Date_Creation":"2025-11-24","Week":48,"Source_Lead":"External Referral","Company":"MEPCO","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":146,"Description":null,"Date_Creation":"2025-11-26","Week":48,"Source_Lead":null,"Company":"MRF-Trichry","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":147,"Description":null,"Date_Creation":"2025-11-28","Week":48,"Source_Lead":"External Demand","Company":"Nemak","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":148,"Description":null,"Date_Creation":"2025-11-29","Week":48,"Source_Lead":null,"Company":"J.K FENNER","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":149,"Description":null,"Date_Creation":"2025-11-30","Week":48,"Source_Lead":"External Demand","Company":"Meccanotecnica India Pvt. Ltd.","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":150,"Description":null,"Date_Creation":"2025-12-01","Week":49,"Source_Lead":"External Demand","Company":"Meccanotecnica India Pvt. Ltd.","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":151,"Description":null,"Date_Creation":"2025-11-28","Week":48,"Source_Lead":null,"Company":"Bumi Armada","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":152,"Description":null,"Date_Creation":"2025-11-28","Week":48,"Source_Lead":"External Demand","Company":"Ashok Leyland","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":153,"Description":null,"Date_Creation":"2025-11-28","Week":48,"Source_Lead":null,"Company":"Suzlon","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":154,"Description":null,"Date_Creation":"2025-11-28","Week":48,"Source_Lead":null,"Company":"Tafe","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":155,"Description":null,"Date_Creation":"2025-12-08","Week":50,"Source_Lead":"External Demand","Company":"Larsen & Toubro Limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":156,"Description":null,"Date_Creation":"2025-12-15","Week":51,"Source_Lead":"External Demand","Company":"TIVOLT Electric Vehicles Pvt Ltd","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":157,"Description":null,"Date_Creation":"2025-12-23","Week":52,"Source_Lead":"External Demand","Company":"SAMVARDHANA MOTHERSON INTERNATIONAL LIMITED","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":158,"Description":null,"Date_Creation":"2025-12-24","Week":52,"Source_Lead":"Internal Referral","Company":"PIL","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":159,"Description":null,"Date_Creation":"2025-12-25","Week":52,"Source_Lead":"Internal Referral","Company":"PIL","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":160,"Description":null,"Date_Creation":"2025-12-26","Week":52,"Source_Lead":"Internal Referral","Company":"PIL","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":161,"Description":null,"Date_Creation":"2025-12-27","Week":52,"Source_Lead":"Internal Referral","Company":"PIL","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":162,"Description":null,"Date_Creation":"2025-12-28","Week":52,"Source_Lead":"Internal Referral","Company":"PIL","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":163,"Description":null,"Date_Creation":"2025-12-28","Week":52,"Source_Lead":null,"Company":"Boiler Automation - AlfaLaval","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":164,"Description":null,"Date_Creation":"2025-12-28","Week":52,"Source_Lead":null,"Company":"Baleine CIMC","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":165,"Description":null,"Date_Creation":"2025-12-28","Week":52,"Source_Lead":null,"Company":"Baleine Sea Water - UCP","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":166,"Description":null,"Date_Creation":"2025-12-28","Week":52,"Source_Lead":null,"Company":"Dukhan Qatar","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":167,"Description":null,"Date_Creation":"2025-12-28","Week":52,"Source_Lead":null,"Company":"Baiji Refinery DCS","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":168,"Description":null,"Date_Creation":"2025-12-28","Week":52,"Source_Lead":null,"Company":"Iraq - Baiji Refinery TAS","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":169,"Description":null,"Date_Creation":"2025-12-28","Week":52,"Source_Lead":null,"Company":"KJO Cybersecurity","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":170,"Description":null,"Date_Creation":"2025-12-28","Week":52,"Source_Lead":null,"Company":"ENMCS - QatarEnergy Bul Hanine","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":171,"Description":null,"Date_Creation":"2025-12-28","Week":52,"Source_Lead":null,"Company":"DNMC Tender","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":172,"Description":null,"Date_Creation":"2025-12-28","Week":52,"Source_Lead":null,"Company":"MODICON PLC UPGRADE - Qatar Energy","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"kalicharan","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":173,"Description":null,"Date_Creation":"2025-12-02","Week":49,"Source_Lead":"External Demand","Company":"Rane Engine Valves","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":174,"Description":null,"Date_Creation":"2025-11-27","Week":48,"Source_Lead":"External Demand","Company":"Rane Engine Valves","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":175,"Description":null,"Date_Creation":"2025-11-28","Week":48,"Source_Lead":null,"Company":"ITC - ICML","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":176,"Description":null,"Date_Creation":"2025-11-12","Week":46,"Source_Lead":null,"Company":"Tvs- SI Air Spring","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Pusparaj","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":177,"Description":null,"Date_Creation":"2025-11-04","Week":45,"Source_Lead":"External Referral","Company":"TVS Sundaram Rubber","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":178,"Description":null,"Date_Creation":"2025-11-05","Week":45,"Source_Lead":"External Referral","Company":"ITC -ICML -Snack","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":179,"Description":null,"Date_Creation":"2025-11-09","Week":45,"Source_Lead":"External Referral","Company":"J.K FENNER -   MADURAI","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":180,"Description":null,"Date_Creation":"2025-12-05","Week":49,"Source_Lead":"External Referral","Company":"Naga Limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":181,"Description":null,"Date_Creation":"2025-12-05","Week":49,"Source_Lead":"External Referral","Company":"Naga Limited","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":182,"Description":null,"Date_Creation":"2025-12-04","Week":49,"Source_Lead":null,"Company":"Aditya Steels","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":183,"Description":null,"Date_Creation":"2025-12-15","Week":51,"Source_Lead":"External Demand","Company":"Hindustan Food","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":184,"Description":null,"Date_Creation":"2025-12-16","Week":51,"Source_Lead":"External Demand","Company":"Hindustan Food","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":185,"Description":null,"Date_Creation":"2025-12-16","Week":51,"Source_Lead":null,"Company":"Vensys Leap Engineering Services","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":null,"Office":null,"Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":186,"Description":null,"Date_Creation":"2026-01-06","Week":2,"Source_Lead":null,"Company":"Hindustan Food","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":187,"Description":null,"Date_Creation":"2026-01-06","Week":2,"Source_Lead":null,"Company":"Gulf Oil","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":188,"Description":null,"Date_Creation":"2026-01-06","Week":2,"Source_Lead":null,"Company":"IDEF","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":189,"Description":null,"Date_Creation":"2026-01-20","Week":4,"Source_Lead":null,"Company":"TIVOLT Electric Vehicles Pvt Ltd","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":190,"Description":null,"Date_Creation":"2026-02-02","Week":6,"Source_Lead":"External Demand","Company":"Neamak","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":191,"Description":null,"Date_Creation":"2026-02-02","Week":6,"Source_Lead":"External Demand","Company":"Neamak","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Chennai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":192,"Description":null,"Date_Creation":"2026-02-02","Week":6,"Source_Lead":"Internal Referral","Company":"EMERSON","Size_Company":"Big","Contact_Company":"David Montero","Tax_ID":null,"Segment":"Mining","Country":"Chile","Estate":null,"City":null,"Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-02-12","Days_on_Stage":32.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Follow up with David","RelationShip_With_Customer":"Worked once","Urgency":"Medium","Technical_Fit":"High","Budget":"Under definition","Probability":0.49,"Type of service":"Cybersecurity","Currency":"BRL","Forecast _Date":null,"Estimated_Value":100000.0,"Forecast_Deal_Value":49000.0},{"ID_Opportunity":193,"Description":null,"Date_Creation":"2026-02-05","Week":6,"Source_Lead":null,"Company":"Jasmine","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Gnanas","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":194,"Description":null,"Date_Creation":"2026-02-16","Week":6,"Source_Lead":"External Demand","Company":"CHARIS COMMUNICATIONS PRIVATE LIMITED","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":195,"Description":null,"Date_Creation":"2026-02-18","Week":6,"Source_Lead":"External Demand","Company":"Inox Air Product Pvt Ltd","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":196,"Description":null,"Date_Creation":"2026-02-23","Week":6,"Source_Lead":"External Demand","Company":"Jindal aluminium","Size_Company":null,"Contact_Company":null,"Tax_ID":null,"Segment":null,"Country":null,"Estate":null,"City":null,"Seller":"Nobin","Office":"India - Madurai","Funnel_Stage":null,"Status":null,"Reason_Lost":null,"Date_Actual_Stage":null,"Days_on_Stage":0.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":null,"OBS":null,"RelationShip_With_Customer":null,"Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":null,"Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":197,"Description":"EAF and LF OT cyber security","Date_Creation":"2026-03-01","Week":9,"Source_Lead":"Internal Referral","Company":"Gerdau MaracanaÃº","Size_Company":"Medium","Contact_Company":"Joab","Tax_ID":"07.358.761/0013-00","Segment":"Steel Makings","Country":"Brasil","Estate":"CearÃ¡","City":"MaracanaÃº","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2025-12-16","Days_on_Stage":90.0,"Date_Last_Contact":"2026-03-13","Days_Since_Last_Contact":3,"Date_Next_Action":"2026-03-19","OBS":"Meeting with Joab","RelationShip_With_Customer":"First Technical contact","Urgency":"Medium","Technical_Fit":"Fully compliant","Budget":"Estimated budget","Probability":0.47,"Type of service":"Cybersecurity","Currency":"BRL","Forecast _Date":null,"Estimated_Value":100000.0,"Forecast_Deal_Value":47000.0},{"ID_Opportunity":198,"Description":"Skid boiler","Date_Creation":"2026-02-23","Week":9,"Source_Lead":"Partners","Company":"Petrobras","Size_Company":"Big","Contact_Company":"Romulo SIlva","Tax_ID":null,"Segment":"Oil & Gas","Country":"Brasil","Estate":"Rio de Janeiro","City":"Rio de Janeiro","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Closed - Lost","Reason_Lost":"NA","Date_Actual_Stage":"2026-02-24","Days_on_Stage":20.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-03","OBS":"Send quotation to Romulo","RelationShip_With_Customer":"New Client","Urgency":null,"Technical_Fit":null,"Budget":null,"Probability":0.0,"Type of service":null,"Currency":"BRL","Forecast _Date":null,"Estimated_Value":0.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":199,"Description":"Panel assembly","Date_Creation":"2026-02-13","Week":7,"Source_Lead":"Partners","Company":"Fortlev","Size_Company":"Medium","Contact_Company":"Franklin Douglas Leal","Tax_ID":"32.270.838/0001-91","Segment":"Chemicals","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Deal","Status":"Closed - Won","Reason_Lost":"NA","Date_Actual_Stage":"2026-02-24","Days_on_Stage":20.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-05","OBS":"Follow up with Franklin","RelationShip_With_Customer":"Worked once","Urgency":"High","Technical_Fit":"Fully compliant","Budget":"Approved budget","Probability":1.0,"Type of service":"Man power Support","Currency":"BRL","Forecast _Date":null,"Estimated_Value":14000.0,"Forecast_Deal_Value":14000.0},{"ID_Opportunity":200,"Description":"Steel plug","Date_Creation":"2026-03-05","Week":10,"Source_Lead":"Partners","Company":"Petrobras","Size_Company":"Big","Contact_Company":"Patrick","Tax_ID":"33.000.167/0001-01","Segment":"Oil & Gas","Country":"Brasil","Estate":"Rio de Janeiro","City":"MacaÃ©","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Proposal","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-03-06","Days_on_Stage":10.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-13","OBS":"Waitng for Patrick feedback - bid deadline","RelationShip_With_Customer":"New Client","Urgency":"High","Technical_Fit":"Out of scope","Budget":"Approved budget","Probability":0.0,"Type of service":"Projects","Currency":"BRL","Forecast _Date":null,"Estimated_Value":9180.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":201,"Description":"SPDA","Date_Creation":"2026-03-05","Week":10,"Source_Lead":"Partners","Company":"Fortlev","Size_Company":"Medium","Contact_Company":"Franklin Douglas Leal","Tax_ID":"32.270.838/0001-91","Segment":"Chemicals","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Closed - Lost","Reason_Lost":"NA","Date_Actual_Stage":"2026-03-11","Days_on_Stage":5.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-11","OBS":"Follow up with Franklin","RelationShip_With_Customer":"Worked once","Urgency":"High","Technical_Fit":"Out of scope","Budget":"Approved budget","Probability":0.0,"Type of service":"Maintenance","Currency":"BRL","Forecast _Date":null,"Estimated_Value":14000.0,"Forecast_Deal_Value":0.0},{"ID_Opportunity":202,"Description":"Low-complexity services - Fixed manpower","Date_Creation":"2026-03-09","Week":11,"Source_Lead":"Partners","Company":"Fortlev","Size_Company":"Medium","Contact_Company":"Franklin Douglas Leal","Tax_ID":"32.270.838/0001-91","Segment":"Chemicals","Country":"Brasil","Estate":"Espirito Santo","City":"Serra","Seller":"Lucas","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Open","Reason_Lost":"NA","Date_Actual_Stage":"2026-03-09","Days_on_Stage":7.0,"Date_Last_Contact":"2026-03-12","Days_Since_Last_Contact":4,"Date_Next_Action":"2026-03-13","OBS":"Follow up with Franklin (Marcella?) - Key person?","RelationShip_With_Customer":"Repeat Customer","Urgency":"Medium","Technical_Fit":"Fully compliant","Budget":"Under definition","Probability":0.555,"Type of service":"Man power Support","Currency":"BRL","Forecast _Date":null,"Estimated_Value":140000.0,"Forecast_Deal_Value":77700.0},{"ID_Opportunity":203,"Description":"Maintenance on the lifeboat","Date_Creation":"2026-03-10","Week":11,"Source_Lead":"Partners","Company":"Petrobras","Size_Company":"Big","Contact_Company":"Patrick","Tax_ID":"33.000.167/0001-01","Segment":"Oil & Gas","Country":"Brasil","Estate":"Rio de Janeiro","City":"MacaÃ©","Seller":"Gustavo","Office":"Brazil","Funnel_Stage":"Qualification","Status":"Closed - Lost","Reason_Lost":"NA","Date_Actual_Stage":"2026-03-10","Days_on_Stage":6.0,"Date_Last_Contact":null,"Days_Since_Last_Contact":null,"Date_Next_Action":"2026-03-12","OBS":"Reply Patrick","RelationShip_With_Customer":"New Client","Urgency":"High","Technical_Fit":"Out of scope","Budget":"Approved budget","Probability":0.0,"Type of service":"Projects","Currency":"BRL","Forecast _Date":null,"Estimated_Value":100000.0,"Forecast_Deal_Value":0.0}];
// â”€â”€ CONSTANTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function getTodayIsoLocal() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
const TODAY = getTodayIsoLocal();
const TODAY_D = new Date(TODAY + 'T00:00:00');
const WEEK_END = new Date(TODAY_D); WEEK_END.setDate(WEEK_END.getDate() + 7);
const STAGES = ['Lead','Qualification','Proposal','Negotiation','Deal'];
const STATUS_LIST = ['Open','Closed - Won','Closed - Lost','Internal denial'];
const STATUS_OPEN = 'Open';
const SOURCE_LIST = ['Internal Referral','External Referral','External Demand','Partners','Network Search'];
const EMPTY_FILTER_VALUE = '__EMPTY__';
const EMPTY_FILTER_LABEL = 'Vazio';
const THEME_KEY = 'apeiron_theme_mode_v1';
const URL_PARAMS = new URLSearchParams(window.location.search || '');
const LAUNCHER_TAG = (URL_PARAMS.get('launcher') || '').trim().toLowerCase();
const LAUNCHER_DIR_HINT = (URL_PARAMS.get('launcherDir') || '').trim();
const DB_PICKER_SCOPE_RAW = LAUNCHER_TAG || 'opportunities';
const DB_PICKER_SCOPE = DB_PICKER_SCOPE_RAW.replace(/[^a-z0-9_-]/gi, '_').toLowerCase() || 'opportunities';
const DB_PICKER_ID = 'apeiron_db_picker_' + DB_PICKER_SCOPE;

// Chart instances
let charts = {};
let activeQuickView = 'all';
let visibleOpenRows = [];
let dbDirty = false;
let activeOpportunityId = null;
let modalEditMode = false;
let manageCrmTab = 'companies';
let selectedCompanyKey = null;
let selectedClientKey = null;
const DEFAULT_DB_FILE_NAME = 'Dashboard Opportunities Brasil.xlsx';
let currentDbFileName = DEFAULT_DB_FILE_NAME;
let currentDbHandle = null;
let currentDbDirHandle = null;
const DB_HANDLE_DB_NAME = 'apeiron_db_handle_store_v1';
const DB_HANDLE_STORE_NAME = 'handles';
const DB_HANDLE_RECORD_KEY = 'active';

function updateCurrentDbFileLabel() {
  const el = document.getElementById('current-db-file');
  if (!el) return;
  el.textContent = `DB: ${currentDbFileName}`;
  el.title = currentDbFileName;
}

function normalizeDbFileName(name) {
  const raw = String(name || '').trim();
  if (!raw) return DEFAULT_DB_FILE_NAME;
  const safe = raw.replace(/[\\/:*?"<>|]/g, '_');
  if (/\.xlsx$/i.test(safe)) return safe;
  if (/\.csv$/i.test(safe)) return safe;
  return safe + '.xlsx';
}

function setCurrentDbFileName(name) {
  currentDbFileName = normalizeDbFileName(name);
  updateCurrentDbFileLabel();
  updateDbSaveButton();
}

function supportsDbHandlePersistence() {
  return typeof indexedDB !== 'undefined';
}

function openDbHandleStoreDb() {
  return new Promise((resolve, reject) => {
    if (!supportsDbHandlePersistence()) {
      reject(new Error('IndexedDB unavailable'));
      return;
    }
    const req = indexedDB.open(DB_HANDLE_DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(DB_HANDLE_STORE_NAME)) {
        db.createObjectStore(DB_HANDLE_STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error('Failed to open DB handle store'));
  });
}

async function persistCurrentDbHandle() {
  if (!supportsDbHandlePersistence()) return;
  try {
    const db = await openDbHandleStoreDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_HANDLE_STORE_NAME, 'readwrite');
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error('Failed to persist DB handle'));
      tx.objectStore(DB_HANDLE_STORE_NAME).put({
        handle: currentDbHandle || null,
        dirHandle: currentDbDirHandle || null,
        fileName: currentDbFileName,
        savedAt: Date.now()
      }, DB_HANDLE_RECORD_KEY);
    });
    db.close();
  } catch (err) {
    console.warn('Could not persist DB handle', err);
  }
}

async function loadPersistedDbHandle() {
  if (!supportsDbHandlePersistence()) return null;
  try {
    const db = await openDbHandleStoreDb();
    const record = await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_HANDLE_STORE_NAME, 'readonly');
      tx.onerror = () => reject(tx.error || new Error('Failed to read DB handle'));
      const req = tx.objectStore(DB_HANDLE_STORE_NAME).get(DB_HANDLE_RECORD_KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error || new Error('Failed to read DB handle'));
    });
    db.close();

    if (record && record.dirHandle && typeof record.dirHandle.values === 'function') {
      currentDbDirHandle = record.dirHandle;
    }
    if (record && record.handle && typeof record.handle.getFile === 'function') {
      currentDbHandle = record.handle;
    }
    if (record && record.fileName) setCurrentDbFileName(record.fileName);

    updateDbSaveButton();
    return currentDbHandle || null;
  } catch (err) {
    console.warn('Could not load persisted DB handle', err);
  }
  return null;
}

async function ensureDbFolderHandleForPicker() {
  if (currentDbHandle || currentDbDirHandle) return;
  if (typeof window.showDirectoryPicker !== 'function') return;

  const shouldPick = confirm('No default DB folder configured. Select the Opportunities DB folder once?');
  if (!shouldPick) return;

  try {
    const dirHandle = await window.showDirectoryPicker({ id: DB_PICKER_ID + '_dir' });
    if (!dirHandle) return;
    currentDbDirHandle = dirHandle;
    await persistCurrentDbHandle();
  } catch (err) {
    if (err && err.name === 'AbortError') return;
    console.warn('Could not set default DB folder', err);
  }
}

const CRITICAL_FIELDS = [
  { key: 'ID_Opportunity', label: 'Opportunity ID' },
  { key: 'Company', label: 'Company' },
  { key: 'Contact_Company', label: 'Contact Name' },
  { key: 'Funnel_Stage', label: 'Funnel Stage' },
  { key: 'Status', label: 'Status' },
  { key: 'Date_Creation', label: 'Created Date' }
];

const MODAL_EDIT_FIELDS = [
  { key: 'Company', label: 'Company' },
  { key: 'Contact_Company', label: 'Contact' },
  { key: 'Seller', label: 'Account Owner' },
  { key: 'Funnel_Stage', label: 'Funnel Stage', type: 'select', options: STAGES },
  { key: 'Status', label: 'Status', type: 'select', options: STATUS_LIST },
  { key: 'Date_Next_Action', label: 'Next Action Date', type: 'date' },
  { key: 'Source_Lead', label: 'Lead Source', type: 'select', options: SOURCE_LIST },
  { key: 'Segment', label: 'Segment' },
  { key: 'Office', label: 'Office' },
  { key: 'Country', label: 'Country' },
  { key: 'Estate', label: 'State / Region' },
  { key: 'City', label: 'City' },
  { key: 'Urgency', label: 'Urgency', type: 'select', options: ['High','Medium','Low','No urgency'] },
  { key: 'Estimated_Value', label: 'Estimated Value (R$)', type: 'number', min: '0', step: '0.01' },
  { key: 'Forecast_Deal_Value', label: 'Forecast Value (R$)', type: 'number', min: '0', step: '0.01' },
  { key: 'Probability', label: 'Win Probability (0-1)', type: 'number', min: '0', max: '1', step: '0.01' },
  { key: 'OBS', label: 'Notes / Next Step', type: 'textarea', fullWidth: true },
];

const COMPUTED_EXPORT_SKIP = new Set([
  'SLA_Label','SLA_Class','SLA_Sort','Health_Score',
  'Priority_Score','Priority_Label'
]);
const CRM_DEFAULT_SOURCE = 'Internal Referral';
const CRM_DEFAULT_STATUS = 'Open';
const CRM_DEFAULT_STAGE = 'Lead';

function applyTheme(theme) {
  const mode = theme === 'light' ? 'light' : 'dark';
  document.body.classList.toggle('theme-light', mode === 'light');
  const icon = document.getElementById('theme-toggle-icon');
  const btn = document.getElementById('theme-toggle');
  if (icon) icon.textContent = mode === 'light' ? 'L' : 'D';
  if (btn) btn.title = mode === 'light' ? 'Switch to Night Mode' : 'Switch to Day Mode';
  localStorage.setItem(THEME_KEY, mode);
}

function initThemeToggle() {
  const saved = localStorage.getItem(THEME_KEY);
  applyTheme(saved === 'light' ? 'light' : 'dark');
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('theme-light');
    applyTheme(isLight ? 'dark' : 'light');
    if (typeof applyFilters === 'function') applyFilters();
  });
}

// â”€â”€ FORMAT HELPERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function fmtBRL(v) {
  if (!v && v !== 0) return '-';
  return 'R$ ' + Number(v).toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: 0});
}
function fmtBRLshort(v) {
  if (!v && v !== 0) return '-';
  if (v >= 1000000) return 'R$ ' + (v/1000000).toFixed(1).replace('.',',') + 'M';
  if (v >= 1000) return 'R$ ' + (v/1000).toFixed(0) + 'k';
  return 'R$ ' + v;
}
function normalizeDateScalar(value) {
  if (value === null || value === undefined || value === '') return null;
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
  if (typeof value === 'number' && Number.isFinite(value)) {
    if (value > 20000 && value < 80000) {
      const excelEpoch = new Date(Date.UTC(1899, 11, 30));
      excelEpoch.setUTCDate(excelEpoch.getUTCDate() + Math.floor(value));
      return excelEpoch.toISOString().slice(0, 10);
    }
    return null;
  }
  const txt = String(value).trim();
  if (!txt) return null;
  const mIso = txt.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);
  if (mIso) return `${mIso[1]}-${mIso[2].padStart(2,'0')}-${mIso[3].padStart(2,'0')}`;
  const mBr = txt.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);
  if (mBr) return `${mBr[3]}-${mBr[2].padStart(2,'0')}-${mBr[1].padStart(2,'0')}`;
  const dt = new Date(txt);
  if (!Number.isNaN(dt.getTime())) return dt.toISOString().slice(0, 10);
  return null;
}
function fmtDate(s) {
  const iso = normalizeDateScalar(s);
  if (!iso) return s ? String(s) : '-';
  const p = iso.split('-');
  return p[2]+'/'+p[1]+'/'+p[0];
}
function fmtPct(v) { return v ? Math.round(v*100)+'%' : '-'; }

function escHtml(v) {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
function escAttr(v) { return escHtml(v); }

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}
function cleanNullableString(value) {
  if (value === undefined || value === null) return null;
  const txt = String(value).trim();
  return txt === '' ? null : txt;
}
function ensureDbSchema(rows = RAW_DATA) {
  rows.forEach(row => {
    if (!row || typeof row !== 'object') return;
    row.Segment = cleanNullableString(row.Segment);

    ['Date_Next_Action','Date_Creation','Date_Actual_Stage','Date_Last_Contact'].forEach(f => {
      const iso = normalizeDateScalar(row[f]);
      if (iso) row[f] = iso;
      else if (row[f] === '' || row[f] === undefined) row[f] = null;
    });

    const wk = parseInt(row.Week, 10);
    row.Week = Number.isFinite(wk) && wk >= 1 && wk <= 53
      ? wk
      : (getIsoWeekFromDateString(row.Date_Creation) || null);

    const fcRaw = row['Forecast _Date'] || row['Forecast_Date'];
    if (fcRaw) {
      const s = String(fcRaw).trim();
      const quarterLike = s.replace('_', 'Q').replace(/\s+/g, '');
      if (/^\d{2}Q\d$/.test(quarterLike)) {
        row['Forecast _Date'] = quarterLike;
      } else {
        const isoFc = normalizeDateScalar(fcRaw);
        if (isoFc) {
          const d = new Date(isoFc + 'T00:00:00');
          row['Forecast _Date'] = `${String(d.getFullYear()).slice(2)}Q${Math.ceil((d.getMonth() + 1) / 3)}`;
        } else {
          row['Forecast _Date'] = s;
        }
      }
    } else {
      row['Forecast _Date'] = null;
    }
  });
}
function getIsoWeekInfoFromDateString(dateStr) {
  if (!dateStr) return null;
  const dt = new Date(dateStr + 'T00:00:00');
  if (Number.isNaN(dt.getTime())) return null;
  const d = new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const isoYear = d.getUTCFullYear();
  const yearStart = new Date(Date.UTC(isoYear, 0, 1));
  const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return { year: isoYear, week };
}
function getIsoWeekFromDateString(dateStr) {
  const info = getIsoWeekInfoFromDateString(dateStr);
  return info ? info.week : null;
}
function getIsoWeekYearLabelFromDateString(dateStr) {
  const info = getIsoWeekInfoFromDateString(dateStr);
  if (!info) return null;
  const yy = String(info.year).slice(-2);
  const ww = String(info.week).padStart(2, '0');
  return `${yy}W${ww}`;
}
function getIsoWeekYearLabelFromRow(row) {
  const fromDate = getIsoWeekYearLabelFromDateString(row?.Date_Creation);
  if (fromDate) return fromDate;
  const wk = Number.parseInt(row?.Week, 10);
  if (!Number.isFinite(wk) || wk < 1 || wk > 53) return null;
  const yy = String(TODAY).slice(2, 4);
  return `${yy}W${String(wk).padStart(2, '0')}`;
}
function compareIsoWeekYearLabels(a, b) {
  const ma = /^(\d{2})W(\d{2})$/.exec(String(a || '').toUpperCase());
  const mb = /^(\d{2})W(\d{2})$/.exec(String(b || '').toUpperCase());
  if (!ma && !mb) return String(a || '').localeCompare(String(b || ''));
  if (!ma) return 1;
  if (!mb) return -1;
  const ya = Number(ma[1]);
  const yb = Number(mb[1]);
  if (ya !== yb) return ya - yb;
  return Number(ma[2]) - Number(mb[2]);
}

function getNextOpportunityId() {
  return RAW_DATA.reduce((max, row) => Math.max(max, Number(row.ID_Opportunity) || 0), 0) + 1;
}
function makeClientKey(companyName, contactName) {
  return `${normalizeText(companyName)}|${normalizeText(contactName)}`;
}
function normalizeDateInput(value) {
  const txt = cleanNullableString(value);
  if (!txt) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(txt)) return txt;
  const dt = new Date(txt);
  if (Number.isNaN(dt.getTime())) return null;
  return dt.toISOString().slice(0, 10);
}
function normalizeOpportunityStatus(value) {
  const txt = cleanNullableString(value);
  if (!txt) return null;
  const canonical = STATUS_LIST.find(opt => normalizeText(opt) === normalizeText(txt));
  return canonical || txt;
}
function applyOpportunityStatusRules(row) {
  if (!row || typeof row !== 'object') return { status: null, clearedNextAction: false };
  const status = normalizeOpportunityStatus(row.Status);
  row.Status = status;
  const nextAction = normalizeDateInput(row.Date_Next_Action);
  if (status && status !== STATUS_OPEN) {
    const clearedNextAction = !!nextAction;
    row.Date_Next_Action = null;
    return { status, clearedNextAction };
  }
  row.Date_Next_Action = nextAction;
  return { status, clearedNextAction: false };
}
function formatNextActionDisplay(row) {
  const status = normalizeOpportunityStatus(row?.Status);
  if (status && status !== STATUS_OPEN) return 'N/A';
  return row?.Date_Next_Action ? fmtDate(row.Date_Next_Action) : '-';
}
function normalizeTaxId(value) {
  const txt = cleanNullableString(value);
  if (!txt) return null;
  const digits = txt.replace(/\D/g, '');
  if (digits.length !== 14) return txt;
  return `${digits.slice(0,2)}.${digits.slice(2,5)}.${digits.slice(5,8)}/${digits.slice(8,12)}-${digits.slice(12)}`;
}
function enforceRowIntegrity(row) {
  if (!row || typeof row !== 'object') return;
  row.ID_Opportunity = Number(row.ID_Opportunity) || getNextOpportunityId();
  row.Date_Creation = normalizeDateInput(row.Date_Creation) || TODAY;
  row.Date_Actual_Stage = normalizeDateInput(row.Date_Actual_Stage) || row.Date_Creation;
  row.Date_Last_Contact = normalizeDateInput(row.Date_Last_Contact);
  applyOpportunityStatusRules(row);
  row.Week = getIsoWeekFromDateString(row.Date_Creation) || getIsoWeekFromDateString(TODAY);
  row.Tax_ID = normalizeTaxId(row.Tax_ID);
  ['Estimated_Value', 'Forecast_Deal_Value', 'Probability', 'Days_on_Stage', 'Days_Since_Last_Contact'].forEach(field => {
    if (row[field] === null || row[field] === undefined || row[field] === '') return;
    const num = Number(row[field]);
    row[field] = Number.isFinite(num) ? num : 0;
  });
  if (!Number.isFinite(Number(row.Probability))) row.Probability = 0;
  row.Probability = Math.max(0, Math.min(1, Number(row.Probability)));
}
function enforceDatasetIntegrity(rows = RAW_DATA) {
  ensureDbSchema(rows);
  const seenIds = new Set();
  const collisions = [];
  rows.forEach((row, idx) => {
    enforceRowIntegrity(row);
    let id = Number(row.ID_Opportunity);
    if (!Number.isInteger(id) || id <= 0 || seenIds.has(id)) {
      let candidate = 1;
      while (seenIds.has(candidate)) candidate += 1;
      collisions.push(`row ${idx + 1}: ${row.ID_Opportunity} -> ${candidate}`);
      row.ID_Opportunity = candidate;
      id = candidate;
    }
    seenIds.add(id);
  });
  return { collisions };
}
function getCriticalFieldIssues(rows = RAW_DATA) {
  const issues = [];
  rows.forEach((row, idx) => {
    CRITICAL_FIELDS.forEach(field => {
      const raw = row[field.key];
      const value = raw === null || raw === undefined ? '' : String(raw).trim();
      if (!value) {
        issues.push(`row ${idx + 1}: missing ${field.label}`);
      }
    });
  });
  return issues;
}
function createManualOpportunityTemplate() {
  return {
    ID_Opportunity: getNextOpportunityId(),
    Description: null,
    Date_Creation: TODAY,
    Week: getIsoWeekFromDateString(TODAY),
    Source_Lead: CRM_DEFAULT_SOURCE,
    Company: null,
    Size_Company: null,
    Contact_Company: null,
    Tax_ID: null,
    Segment: null,
    Country: 'Brasil',
    Estate: null,
    City: null,
    Seller: null,
    Office: 'Brazil',
    Funnel_Stage: CRM_DEFAULT_STAGE,
    Status: CRM_DEFAULT_STATUS,
    Reason_Lost: 'NA',
    Date_Actual_Stage: TODAY,
    Days_on_Stage: 0,
    Date_Last_Contact: null,
    Days_Since_Last_Contact: null,
    Date_Next_Action: TODAY,
    OBS: null,
    RelationShip_With_Customer: 'New Client',
    Urgency: 'Medium',
    Technical_Fit: null,
    Budget: null,
    Probability: 0,
    'Type of service': null,
    Currency: 'BRL',
    'Forecast _Date': null,
    Estimated_Value: 0,
    Forecast_Deal_Value: 0
  };
}
function pickMostCommon(rows, field) {
  const counts = new Map();
  rows.forEach(row => {
    const value = cleanNullableString(row[field]);
    if (!value) return;
    counts.set(value, (counts.get(value) || 0) + 1);
  });
  if (!counts.size) return null;
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
}
function collectCompanyGroups() {
  ensureDbSchema(RAW_DATA);
  const map = new Map();
  RAW_DATA.forEach(row => {
    const name = cleanNullableString(row.Company);
    if (!name) return;
    const key = normalizeText(name);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(row);
  });
  return [...map.entries()].map(([key, rows]) => ({
    key,
    rows,
    company: pickMostCommon(rows, 'Company') || rows[0].Company || 'Unnamed',
    taxId: pickMostCommon(rows, 'Tax_ID'),
    segment: pickMostCommon(rows, 'Segment'),
    country: pickMostCommon(rows, 'Country'),
    state: pickMostCommon(rows, 'Estate'),
    city: pickMostCommon(rows, 'City'),
    office: pickMostCommon(rows, 'Office'),
    size: pickMostCommon(rows, 'Size_Company')
  })).sort((a, b) => a.company.localeCompare(b.company));
}
function collectClientGroups() {
  const map = new Map();
  RAW_DATA.forEach(row => {
    const company = cleanNullableString(row.Company);
    const contact = cleanNullableString(row.Contact_Company);
    if (!company || !contact) return;
    const key = makeClientKey(company, contact);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(row);
  });
  return [...map.entries()].map(([key, rows]) => ({
    key,
    rows,
    company: pickMostCommon(rows, 'Company') || rows[0].Company,
    contact: pickMostCommon(rows, 'Contact_Company') || rows[0].Contact_Company,
    owner: pickMostCommon(rows, 'Seller'),
    relationship: pickMostCommon(rows, 'RelationShip_With_Customer'),
    urgency: pickMostCommon(rows, 'Urgency'),
    nextAction: pickMostCommon(rows, 'Date_Next_Action'),
    notes: pickMostCommon(rows, 'OBS')
  })).sort((a, b) => a.contact.localeCompare(b.contact) || a.company.localeCompare(b.company));
}
function refreshCompanyDatalist() {
  const datalist = document.getElementById('crm-company-datalist');
  if (!datalist) return;
  const companies = collectCompanyGroups();
  datalist.innerHTML = companies.map(entry => `<option value="${escAttr(entry.company)}"></option>`).join('');
}
function resetCompanyForm() {
  ['crm-company-name','crm-company-taxid','crm-company-segment','crm-company-country','crm-company-state','crm-company-city','crm-company-office','crm-company-size']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
}
function resetClientForm() {
  ['crm-client-name','crm-client-company','crm-client-owner','crm-client-relationship','crm-client-next-action','crm-client-notes']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  const urg = document.getElementById('crm-client-urgency');
  if (urg) urg.value = '';
}
function fillCompanyForm(entry) {
  if (!entry) { resetCompanyForm(); return; }
  document.getElementById('crm-company-name').value = entry.company || '';
  document.getElementById('crm-company-taxid').value = entry.taxId || '';
  document.getElementById('crm-company-segment').value = entry.segment || '';
  document.getElementById('crm-company-country').value = entry.country || '';
  document.getElementById('crm-company-state').value = entry.state || '';
  document.getElementById('crm-company-city').value = entry.city || '';
  document.getElementById('crm-company-office').value = entry.office || '';
  document.getElementById('crm-company-size').value = entry.size || '';
}
function fillClientForm(entry) {
  if (!entry) { resetClientForm(); return; }
  document.getElementById('crm-client-name').value = entry.contact || '';
  document.getElementById('crm-client-company').value = entry.company || '';
  document.getElementById('crm-client-owner').value = entry.owner || '';
  document.getElementById('crm-client-relationship').value = entry.relationship || '';
  document.getElementById('crm-client-urgency').value = entry.urgency || '';
  document.getElementById('crm-client-next-action').value = entry.nextAction || '';
  document.getElementById('crm-client-notes').value = entry.notes || '';
}
function rebuildManageCrmSelectors() {
  const companySelect = document.getElementById('crm-company-select');
  const clientSelect = document.getElementById('crm-client-select');
  if (!companySelect || !clientSelect) return;

  const companies = collectCompanyGroups();
  const clients = collectClientGroups();
  refreshCompanyDatalist();

  companySelect.innerHTML = '<option value="">Select company...</option>' +
    companies.map(entry => `<option value="${escAttr(entry.key)}">${escHtml(entry.company)}</option>`).join('');
  clientSelect.innerHTML = '<option value="">Select client...</option>' +
    clients.map(entry => `<option value="${escAttr(entry.key)}">${escHtml(entry.contact)} - ${escHtml(entry.company)}</option>`).join('');

  if (selectedCompanyKey && companies.some(entry => entry.key === selectedCompanyKey)) {
    companySelect.value = selectedCompanyKey;
    fillCompanyForm(companies.find(entry => entry.key === selectedCompanyKey));
  } else {
    selectedCompanyKey = null;
    resetCompanyForm();
  }

  if (selectedClientKey && clients.some(entry => entry.key === selectedClientKey)) {
    clientSelect.value = selectedClientKey;
    fillClientForm(clients.find(entry => entry.key === selectedClientKey));
  } else {
    selectedClientKey = null;
    resetClientForm();
  }
}
function openManageCrmModal() {
  openManageCrmModalAt(manageCrmTab || 'companies');
}
function openManageCrmModalAt(tab) {
  const modal = document.getElementById('manage-crm-modal');
  if (!modal) return;
  modal.classList.add('open');
  modal.style.display = 'flex';
  rebuildManageCrmSelectors();
  switchManageCrmTab(tab || 'companies');
}
function closeManageCrmModal() {
  const modal = document.getElementById('manage-crm-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.style.display = 'none';
}
function switchManageCrmTab(tab) {
  manageCrmTab = tab === 'clients' ? 'clients' : 'companies';
  const cTab = document.getElementById('crm-tab-companies');
  const lTab = document.getElementById('crm-tab-clients');
  const cPane = document.getElementById('crm-pane-companies');
  const lPane = document.getElementById('crm-pane-clients');
  if (!cTab || !lTab || !cPane || !lPane) return;
  cTab.classList.toggle('active', manageCrmTab === 'companies');
  lTab.classList.toggle('active', manageCrmTab === 'clients');
  cPane.classList.toggle('active', manageCrmTab === 'companies');
  lPane.classList.toggle('active', manageCrmTab === 'clients');
}
function onCompanySelected() {
  const select = document.getElementById('crm-company-select');
  if (!select) return;
  selectedCompanyKey = select.value || null;
  const entry = collectCompanyGroups().find(item => item.key === selectedCompanyKey);
  fillCompanyForm(entry);
}
function onClientSelected() {
  const select = document.getElementById('crm-client-select');
  if (!select) return;
  selectedClientKey = select.value || null;
  const entry = collectClientGroups().find(item => item.key === selectedClientKey);
  fillClientForm(entry);
}
function saveCompanyChanges() {
  const companyName = cleanNullableString(document.getElementById('crm-company-name')?.value);
  if (!selectedCompanyKey) { showToast('Select an existing company first.'); return; }
  if (!companyName) { showToast('Company name is required.'); return; }

  const groups = collectCompanyGroups();
  const target = groups.find(entry => entry.key === selectedCompanyKey);
  if (!target) { showToast('Selected company was not found.'); return; }
  const targetKey = normalizeText(companyName);
  if (targetKey !== selectedCompanyKey && groups.some(entry => entry.key === targetKey)) {
    showToast('Another company with this name already exists. Use that record to avoid duplicates.');
    return;
  }

  const data = {
    Company: companyName,
    Tax_ID: normalizeTaxId(document.getElementById('crm-company-taxid')?.value),
    Segment: cleanNullableString(document.getElementById('crm-company-segment')?.value),
    Country: cleanNullableString(document.getElementById('crm-company-country')?.value),
    Estate: cleanNullableString(document.getElementById('crm-company-state')?.value),
    City: cleanNullableString(document.getElementById('crm-company-city')?.value),
    Office: cleanNullableString(document.getElementById('crm-company-office')?.value),
    Size_Company: cleanNullableString(document.getElementById('crm-company-size')?.value)
  };

  target.rows.forEach(row => {
    Object.entries(data).forEach(([field, value]) => { row[field] = value; });
    enforceRowIntegrity(row);
  });

  selectedCompanyKey = targetKey;
  applyFilters();
  rebuildManageCrmSelectors();
  registerDbChange(`Company "${companyName}" updated in ${target.rows.length} records.`);
  showToast('Company updated.');
}
function addCompanyManually() {
  const companyName = cleanNullableString(document.getElementById('crm-company-name')?.value);
  if (!companyName) { showToast('Company name is required.'); return; }
  const newKey = normalizeText(companyName);
  if (collectCompanyGroups().some(entry => entry.key === newKey)) {
    showToast('Company already exists. Use Save Company Changes.');
    return;
  }
  const row = createManualOpportunityTemplate();
  row.Company = companyName;
  row.Tax_ID = normalizeTaxId(document.getElementById('crm-company-taxid')?.value);
  row.Segment = cleanNullableString(document.getElementById('crm-company-segment')?.value);
  row.Country = cleanNullableString(document.getElementById('crm-company-country')?.value) || 'Brasil';
  row.Estate = cleanNullableString(document.getElementById('crm-company-state')?.value);
  row.City = cleanNullableString(document.getElementById('crm-company-city')?.value);
  row.Office = cleanNullableString(document.getElementById('crm-company-office')?.value) || 'Brazil';
  row.Size_Company = cleanNullableString(document.getElementById('crm-company-size')?.value);
  row.OBS = 'Manual company creation via Opportunities Leads Hub';
  enforceRowIntegrity(row);

  RAW_DATA.push(row);
  selectedCompanyKey = newKey;
  applyFilters();
  rebuildManageCrmSelectors();
  registerDbChange(`Company "${companyName}" added as opportunity #${row.ID_Opportunity}.`);
  showToast('New company added.');
}
function saveClientChanges() {
  const contactName = cleanNullableString(document.getElementById('crm-client-name')?.value);
  const companyName = cleanNullableString(document.getElementById('crm-client-company')?.value);
  if (!selectedClientKey) { showToast('Select an existing client first.'); return; }
  if (!contactName || !companyName) { showToast('Client name and company are required.'); return; }
  const nextClientKey = makeClientKey(companyName, contactName);
  if (nextClientKey !== selectedClientKey && collectClientGroups().some(item => item.key === nextClientKey)) {
    showToast('This contact already exists for the selected company.');
    return;
  }

  const entry = collectClientGroups().find(item => item.key === selectedClientKey);
  if (!entry) { showToast('Selected client was not found.'); return; }

  const nextActionRaw = cleanNullableString(document.getElementById('crm-client-next-action')?.value);
  const updates = {
    Contact_Company: contactName,
    Company: companyName,
    Seller: cleanNullableString(document.getElementById('crm-client-owner')?.value),
    RelationShip_With_Customer: cleanNullableString(document.getElementById('crm-client-relationship')?.value),
    Urgency: cleanNullableString(document.getElementById('crm-client-urgency')?.value),
    OBS: cleanNullableString(document.getElementById('crm-client-notes')?.value)
  };
  if (nextActionRaw) updates.Date_Next_Action = normalizeDateInput(nextActionRaw);
  const companyEntry = collectCompanyGroups().find(item => item.key === normalizeText(companyName));
  entry.rows.forEach(row => {
    Object.entries(updates).forEach(([field, value]) => { row[field] = value; });
    if (companyEntry) {
      row.Tax_ID = companyEntry.taxId;
      row.Segment = companyEntry.segment;
      row.Country = companyEntry.country || row.Country;
      row.Estate = companyEntry.state;
      row.City = companyEntry.city;
      row.Office = companyEntry.office || row.Office;
      row.Size_Company = companyEntry.size;
    }
    enforceRowIntegrity(row);
  });

  selectedClientKey = nextClientKey;
  applyFilters();
  rebuildManageCrmSelectors();
  registerDbChange(`Client "${contactName}" updated in ${entry.rows.length} records.`);
  showToast('Client updated.');
}
function addClientManually() {
  const contactName = cleanNullableString(document.getElementById('crm-client-name')?.value);
  const companyName = cleanNullableString(document.getElementById('crm-client-company')?.value);
  if (!contactName || !companyName) { showToast('Client name and company are required.'); return; }
  const newClientKey = makeClientKey(companyName, contactName);
  if (collectClientGroups().some(entry => entry.key === newClientKey)) {
    showToast('This contact already exists for this company.');
    return;
  }

  const companyEntry = collectCompanyGroups().find(entry => entry.key === normalizeText(companyName));
  const row = createManualOpportunityTemplate();
  row.Contact_Company = contactName;
  row.Company = companyName;
  row.Seller = cleanNullableString(document.getElementById('crm-client-owner')?.value);
  row.RelationShip_With_Customer = cleanNullableString(document.getElementById('crm-client-relationship')?.value) || 'New Client';
  row.Urgency = cleanNullableString(document.getElementById('crm-client-urgency')?.value) || 'Medium';
  const nextActionRaw = cleanNullableString(document.getElementById('crm-client-next-action')?.value);
  if (nextActionRaw) row.Date_Next_Action = normalizeDateInput(nextActionRaw);
  row.OBS = cleanNullableString(document.getElementById('crm-client-notes')?.value) || 'Manual client creation via Opportunities Leads Hub';

  if (companyEntry) {
    row.Tax_ID = companyEntry.taxId;
    row.Segment = companyEntry.segment;
    row.Country = companyEntry.country || row.Country;
    row.Estate = companyEntry.state;
    row.City = companyEntry.city;
    row.Office = companyEntry.office || row.Office;
    row.Size_Company = companyEntry.size;
  }
  enforceRowIntegrity(row);

  RAW_DATA.push(row);
  selectedClientKey = newClientKey;
  selectedCompanyKey = normalizeText(companyName);
  applyFilters();
  rebuildManageCrmSelectors();
  registerDbChange(`Client "${contactName}" added as opportunity #${row.ID_Opportunity}.`);
  showToast('New client added.');
}
// â”€â”€ DATE COMPARISON â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function dateOf(s) { return s ? new Date(s) : null; }
function isOverdue(s) { const d = dateOf(s); return d && d < TODAY_D; }
function isDueSoon(s) { const d = dateOf(s); return d && d >= TODAY_D && d <= WEEK_END; }
function isDueToday(s) {
  const iso = normalizeDateScalar(s);
  return !!iso && iso === TODAY;
}
function isNoNextAction(s) {
  return !normalizeDateScalar(s);
}
function isSameMonth(s) {
  const d = dateOf(s);
  return !!d && d.getFullYear() === TODAY_D.getFullYear() && d.getMonth() === TODAY_D.getMonth();
}
function getSLAInfo(r) {
  const d = dateOf(r.Date_Next_Action);
  if (!d) return { cls:'sla-none', label:'No date', sort: 9999 };
  const diff = Math.floor((d - TODAY_D) / 86400000);
  if (diff < 0) return { cls:'sla-overdue', label:`Overdue ${Math.abs(diff)}d`, sort: -Math.abs(diff) };
  if (diff <= 7) return { cls:'sla-soon', label:`Due in ${diff}d`, sort: diff };
  return { cls:'sla-ok', label:`On track ${diff}d`, sort: diff };
}
function computeDaysOnStageValue(r) {
  const numeric = Number(r.Days_on_Stage);
  if (Number.isFinite(numeric) && numeric > 0) return Math.max(0, Math.round(numeric));
  const stageDate = normalizeDateScalar(r.Date_Actual_Stage) || normalizeDateScalar(r.Date_Creation);
  if (!stageDate) return 0;
  const base = new Date(stageDate + 'T00:00:00');
  if (Number.isNaN(base.getTime())) return 0;
  const diff = Math.floor((TODAY_D - base) / 86400000);
  return Math.max(0, diff);
}

function computeHealthScore(r) {
  let score = 0;
  const p = Number(r.Probability);
  score += isFinite(p) && p > 0 ? Math.max(0, Math.min(1, p)) * 55 : 5;

  const days = Number(r.Days_on_Stage) || 0;
  score += days <= 30 ? 20 : days <= 60 ? 15 : days <= 90 ? 10 : days <= 120 ? 5 : 0;

  const dsl = Number(r.Days_Since_Last_Contact);
  if (!isFinite(dsl) || dsl <= 7) score += 15;
  else if (dsl <= 14) score += 10;
  else if (dsl <= 30) score += 5;

  const urg = String(r.Urgency || '').toLowerCase();
  if (urg === 'high') score -= 8;
  else if (urg === 'medium') score -= 4;
  if (isOverdue(r.Date_Next_Action)) score -= 12;
  else if (isDueSoon(r.Date_Next_Action)) score -= 4;

  return Math.max(0, Math.min(100, Math.round(score)));
}
function computePriorityScore(r) {
  const urgency = normalizeText(r.Urgency);
  const urgencyScore =
    urgency === 'high' ? 22 :
    urgency === 'medium' ? 14 :
    urgency === 'low' ? 8 :
    urgency === 'no urgency' ? 3 : 6;

  let actionScore = 6;
  if (isOverdue(r.Date_Next_Action)) actionScore = 18;
  else if (isDueSoon(r.Date_Next_Action)) actionScore = 12;
  else if (!r.Date_Next_Action) actionScore = 2;

  const prob = Number(r.Probability);
  const probScore = isFinite(prob) && prob > 0 ? Math.max(0, Math.min(20, prob * 20)) : 0;

  const est = Number(r.Estimated_Value);
  const valueScore = isFinite(est) && est > 0
    ? Math.max(0, Math.min(18, Math.log10(est + 1) * 4))
    : 0;

  const health = Number(r.Health_Score);
  const healthPressure = isFinite(health) ? Math.max(0, Math.min(15, (100 - health) * 0.15)) : 6;

  const total = urgencyScore + actionScore + probScore + valueScore + healthPressure + 8;
  return Math.max(0, Math.min(100, Math.round(total)));
}
function getPriorityLabel(score) {
  if (score >= 75) return 'Critical';
  if (score >= 55) return 'High';
  if (score >= 35) return 'Medium';
  return 'Low';
}
function enrichComputedFields(r) {
  r.Days_on_Stage = computeDaysOnStageValue(r);
  const sla = getSLAInfo(r);
  r.SLA_Label = sla.label;
  r.SLA_Class = sla.cls;
  r.SLA_Sort = sla.sort;
  r.Health_Score = computeHealthScore(r);
  r.Priority_Score = computePriorityScore(r);
  r.Priority_Label = getPriorityLabel(r.Priority_Score);
}
function hasMeaningfulLostReason(value) {
  const txt = normalizeText(value);
  if (!txt) return false;
  return !['na','n/a','none','-','null'].includes(txt);
}
function validateOpportunityDiscipline(nextRow) {
  const status = normalizeOpportunityStatus(nextRow.Status) || STATUS_OPEN;
  const stage = cleanNullableString(nextRow.Funnel_Stage);
  const nextAction = normalizeDateInput(nextRow.Date_Next_Action);
  const lostReason = cleanNullableString(nextRow.Reason_Lost);

  if (status === STATUS_OPEN) {
    if (!stage) return 'Funnel Stage is required for Open opportunities.';
    if (!nextAction) return 'Next Action Date is required for Open opportunities.';
  }
  if (status && status !== STATUS_OPEN) {
    nextRow.Date_Next_Action = null;
  }
  if (status === 'Closed - Lost' && !hasMeaningfulLostReason(lostReason)) {
    return 'Lost Reason is required when Status is Closed - Lost.';
  }
  return null;
}
function getOpenDisciplineIssues(rows = RAW_DATA) {
  const issues = [];
  rows.forEach((row, idx) => {
    const status = normalizeOpportunityStatus(row.Status);
    if (status !== STATUS_OPEN) return;
    const stage = cleanNullableString(row.Funnel_Stage);
    const nextAction = normalizeDateInput(row.Date_Next_Action);
    if (stage && nextAction) return;
    const id = row.ID_Opportunity || (idx + 1);
    const missing = [];
    if (!stage) missing.push('Funnel Stage');
    if (!nextAction) missing.push('Next Action Date');
    issues.push(`#${id}: missing ${missing.join(' + ')}`);
  });
  return issues;
}
function rowMatchesQuickView(r) {
  if (activeQuickView === 'all') return true;
  if ((r.Status || 'Open').trim() !== 'Open') return false;
  switch (activeQuickView) {
    case 'overdue': return isOverdue(r.Date_Next_Action);
    case 'today': return isDueToday(r.Date_Next_Action);
    case 'next7': return isDueSoon(r.Date_Next_Action) && !isDueToday(r.Date_Next_Action);
    case 'noaction': return isNoNextAction(r.Date_Next_Action);
    case 'high': return (r.Priority_Score || 0) >= 65;
    case 'month': return isSameMonth(r.Date_Next_Action);
    default: return true;
  }
}
function updateQuickViewSummary(openRows) {
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  const overdue = openRows.filter(r => isOverdue(r.Date_Next_Action)).length;
  const dueToday = openRows.filter(r => isDueToday(r.Date_Next_Action)).length;
  const next7 = openRows.filter(r => isDueSoon(r.Date_Next_Action) && !isDueToday(r.Date_Next_Action)).length;
  const noAction = openRows.filter(r => isNoNextAction(r.Date_Next_Action)).length;
  const high = openRows.filter(r => (r.Priority_Score || 0) >= 65).length;
  setText('qv-all', 'All (' + openRows.length + ')');
  setText('qv-overdue', 'Overdue (' + overdue + ')');
  setText('qv-today', 'Due Today (' + dueToday + ')');
  setText('qv-next7', 'Next 7 Days (' + next7 + ')');
  setText('qv-noaction', 'No Next Action (' + noAction + ')');
  setText('qv-high', 'High Priority (' + high + ')');
}
function updateQuickViewButtons() {
  document.querySelectorAll('.quick-view-chip[data-view]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === activeQuickView);
  });
}
function setQuickView(view) {
  activeQuickView = view || 'all';
  updateQuickViewButtons();
  applyFilters();
}

// â”€â”€ FILTER STATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function getChecked(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(el => el.value);
}
// â”€â”€ FILTER GROUP CONFIG â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Static groups: pre-built in HTML, always default-on
const STATIC_GROUPS = [
  { key:'stage',  label:'Funnel Stage',     col:'Funnel_Stage',    type:'checkbox', fg:'fg-stage',  cbName:'stage'  },
  { key:'status', label:'Status',           col:'Status',          type:'checkbox', fg:'fg-status', cbName:'status' },
  { key:'source', label:'Lead Source',      col:'Source_Lead',     type:'checkbox', fg:'fg-source', cbName:'source' },
  { key:'date',   label:'Next Action Date', col:'Date_Next_Action',type:'date',     fg:'fg-date',   cbName:'date'   },
];
const STATIC_COLS = new Set(STATIC_GROUPS.map(g => g.col));
const SKIP_COLS   = new Set(['ID_Opportunity']);
// Dynamic groups default-enabled (preserved from old config)
const DYN_DEFAULT_ON = new Set(['Seller','Urgency','Segment']);

// Auto-generate dynamic col defs from RAW_DATA on first record
function buildDynColDefs() {
  if (!RAW_DATA.length) return [];
  return Object.keys(RAW_DATA[0])
    .filter(col => !STATIC_COLS.has(col) && !SKIP_COLS.has(col))
    .map(col => {
      const rawVals = RAW_DATA.map(r => r[col]);
      const hasEmpty = rawVals.some(v => v == null || String(v).trim() === '');
      const vals = rawVals.filter(v => v != null && String(v).trim() !== '');
      const isDate    = /date|_dt/i.test(col);
      const isNumeric = vals.length > 0 && vals.every(v => typeof v === 'number');
      let uniqueVals = [...new Set(vals.map(v => String(v)))].sort();
      const type = isDate ? 'date' : isNumeric ? 'range' : uniqueVals.length <= 30 ? 'checkbox' : 'text';
      if (type === 'checkbox' && hasEmpty) uniqueVals = [EMPTY_FILTER_VALUE, ...uniqueVals];
      return { key:'dyn_'+col, col, label:col.replace(/_/g,' '), type,
               uniqueVals: type==='checkbox' ? uniqueVals : null };
    });
}
ensureDbSchema(RAW_DATA);
const DYNAMIC_COL_DEFS = buildDynColDefs();

// Unified state
const filterGroupState = {};
STATIC_GROUPS.forEach(g    => { filterGroupState[g.key] = true; });
DYNAMIC_COL_DEFS.forEach(d => { filterGroupState[d.key] = DYN_DEFAULT_ON.has(d.col); });

let filterCfgOpen = false;
let draggedFilterKey = null;
let filterGroupOrderPref = [];

function getFilterGroupsRoot() {
  return document.getElementById('dynamic-filter-groups');
}

function getFilterGroupOrder() {
  const root = getFilterGroupsRoot();
  if (!root) return [];
  return [...root.querySelectorAll('.filter-group')]
    .map(el => el.dataset.filterKey)
    .filter(Boolean);
}

function applyFilterGroupOrder(order) {
  const root = getFilterGroupsRoot();
  if (!root || !Array.isArray(order) || !order.length) return;
  const groups = [...root.querySelectorAll('.filter-group')];
  const byKey = new Map(groups.map(el => [el.dataset.filterKey, el]));
  order.forEach(key => {
    const el = byKey.get(key);
    if (el) root.appendChild(el);
  });
  groups.forEach(el => {
    if (!order.includes(el.dataset.filterKey)) root.appendChild(el);
  });
}

function attachFilterGroupDrag(groupEl) {
  if (!groupEl || groupEl.dataset.dragBound === '1') return;
  const header = groupEl.querySelector('.filter-group-header');
  const key = groupEl.dataset.filterKey;
  if (!header || !key) return;
  groupEl.dataset.dragBound = '1';
  header.setAttribute('draggable', 'true');
  header.classList.add('drag-enabled');

  header.addEventListener('dragstart', (e) => {
    draggedFilterKey = key;
    groupEl.classList.add('dragging');
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', key);
    }
  });

  header.addEventListener('dragend', () => {
    draggedFilterKey = null;
    document.querySelectorAll('#dynamic-filter-groups .filter-group').forEach(el => {
      el.classList.remove('dragging', 'drag-over');
    });
  });

  groupEl.addEventListener('dragover', (e) => {
    if (!draggedFilterKey || draggedFilterKey === key) return;
    e.preventDefault();
    groupEl.classList.add('drag-over');
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
  });

  groupEl.addEventListener('dragleave', () => {
    groupEl.classList.remove('drag-over');
  });

  groupEl.addEventListener('drop', (e) => {
    if (!draggedFilterKey || draggedFilterKey === key) return;
    e.preventDefault();
    groupEl.classList.remove('drag-over');
    const root = getFilterGroupsRoot();
    if (!root) return;
    const source = [...root.querySelectorAll('.filter-group')].find(el => el.dataset.filterKey === draggedFilterKey);
    if (!source || source === groupEl) return;

    const rect = groupEl.getBoundingClientRect();
    const before = e.clientY < (rect.top + rect.height / 2);
    if (before) root.insertBefore(source, groupEl);
    else root.insertBefore(source, groupEl.nextSibling);

    source.classList.remove('dragging');
    filterGroupOrderPref = getFilterGroupOrder();
  });
}

function refreshFilterGroupDrag() {
  const root = getFilterGroupsRoot();
  if (!root) return;
  root.querySelectorAll('.filter-group').forEach(attachFilterGroupDrag);
}

function toggleFilterCfg() {
  filterCfgOpen = !filterCfgOpen;
  const panel = document.getElementById('filter-cfg-panel');
  const btn   = document.getElementById('filter-cfg-btn');
  panel.style.display = filterCfgOpen ? '' : 'none';
  btn.classList.toggle('active', filterCfgOpen);
  if (filterCfgOpen) renderFilterCfgPanel();
}

function renderFilterCfgPanel() {
  const makeItem = (key, label, on) =>
    `<div class="filter-cfg-item"><span>${label}</span>
      <label class="fcfg-toggle">
        <input type="checkbox" ${on?'checked':''} onchange="setFilterGroup('${key}',this.checked)">
        <span class="fcfg-slider"></span>
      </label></div>`;
  const panel = document.getElementById('filter-cfg-panel');
  let html = `<div class="filter-cfg-panel-title">Active Filter Groups</div>
    <div class="filter-cfg-section-label">Default Filters</div>` +
    STATIC_GROUPS.map(g => makeItem(g.key, g.label, filterGroupState[g.key])).join('') +
    `<div class="filter-cfg-section-label">All Columns</div>` +
    DYNAMIC_COL_DEFS.map(d => makeItem(d.key, d.label, filterGroupState[d.key])).join('');
  panel.innerHTML = html;
}

function setFilterGroup(key, visible) {
  filterGroupState[key] = visible;

  // â”€â”€ Static group: toggle pre-built HTML element
  const sg = STATIC_GROUPS.find(g => g.key === key);
  if (sg) {
    const el = document.getElementById(sg.fg);
    if (el) el.style.display = visible ? '' : 'none';
    if (!visible) {
      document.querySelectorAll(`input[name="${sg.cbName}"]`).forEach(cb => cb.checked = true);
      const df = document.getElementById('date-from');
      const dt = document.getElementById('date-to');
      if (df) df.value = '';
      if (dt) dt.value = '';
    }
    applyFilters();
    return;
  }

  // â”€â”€ Dynamic group: create or toggle DOM element
  const dd = DYNAMIC_COL_DEFS.find(d => d.key === key);
  if (!dd) return;
  const containerId = 'dyn-fg-' + dd.col;
  const container   = document.getElementById('dynamic-filter-groups');
  let el = document.getElementById(containerId);

  if (visible) {
    if (!el) {
      el = document.createElement('div');
      el.className = 'filter-group';
      el.id = containerId;
      el.dataset.filterKey = dd.key;
      el.innerHTML = buildDynGroupHTML(dd);
      container.appendChild(el);
      attachFilterGroupDrag(el);
      if (filterGroupOrderPref.length) applyFilterGroupOrder(filterGroupOrderPref);
      el.querySelectorAll('input').forEach(i => {
        i.addEventListener('change', applyFilters);
        if (i.type === 'text') i.addEventListener('input', applyFilters);
      });
    } else {
      el.style.display = '';
      attachFilterGroupDrag(el);
      if (filterGroupOrderPref.length) applyFilterGroupOrder(filterGroupOrderPref);
    }
  } else {
    if (el) {
      el.style.display = 'none';
      el.querySelectorAll('input').forEach(i => { if (i.type==='checkbox') i.checked=true; else i.value=''; });
    }
  }
  applyFilters();
}

function buildDynGroupHTML(def) {
  const hdr = `<div class="filter-group-header drag-enabled" draggable="true"><span class="filter-group-title"><span class="dot"></span>${def.label}</span><span class="filter-drag-handle" aria-hidden="true">::</span></div>`;
  if (def.type === 'checkbox') {
    return hdr + `<div id="dyn-cb-${def.col}">` +
      `<div class="select-all-row">
        <span class="select-toggle" onclick="selectAll('${def.key}', true)">All</span>
        <span class="select-all-sep">|</span>
        <span class="select-toggle" onclick="selectAll('${def.key}', false)">None</span>
      </div>` +
      def.uniqueVals.map(v =>
        `<label class="checkbox-item">
           <input type="checkbox" class="filter-checkbox" name="${def.key}" value="${v.replace(/"/g,'&quot;')}" checked>
           <span>${v===EMPTY_FILTER_VALUE ? EMPTY_FILTER_LABEL : (v||'-')}</span>
         </label>`).join('') +
      `</div>`;
  } else if (def.type === 'date') {
    return hdr + `<div class="date-range">
      <label>From:</label><input type="date" id="dyn-from-${def.col}">
      <label>To:</label><input type="date" id="dyn-to-${def.col}">
    </div>`;
  } else if (def.type === 'range') {
    return hdr + `<div class="num-range">
      <input type="number" placeholder="Min" id="dyn-min-${def.col}">
      <span class="num-range-sep">â€“</span>
      <input type="number" placeholder="Max" id="dyn-max-${def.col}">
    </div>`;
  } else {
    return hdr + `<div style="padding:4px 0">
      <input type="text" class="dyn-text-input" placeholder="Search ${def.label}â€¦" id="dyn-txt-${def.col}">
    </div>`;
  }
}

function initDynamicGroups() {
  DYNAMIC_COL_DEFS.forEach(d => {
    if (filterGroupState[d.key]) setFilterGroup(d.key, true);
  });
}

function getDateRangeForPeriod(period) {
  const year = Number(String(TODAY).slice(0, 4));
  const month = Number(String(TODAY).slice(5, 7));
  if (!Number.isFinite(year) || !Number.isFinite(month)) return { from: '', to: '' };

  if (period === 'month') {
    const from = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
    const to = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;
    return { from, to };
  }

  if (period === 'quarter') {
    const qStartMonth = (Math.floor((month - 1) / 3) * 3) + 1;
    const qEndMonth = qStartMonth + 2;
    const from = `${year}-${String(qStartMonth).padStart(2, '0')}-01`;
    const lastDay = new Date(Date.UTC(year, qEndMonth, 0)).getUTCDate();
    const to = `${year}-${String(qEndMonth).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;
    return { from, to };
  }

  if (period === 'year') {
    return { from: `${year}-01-01`, to: `${year}-12-31` };
  }

  return { from: '', to: '' };
}

function getCustomGlobalDateRange() {
  const fromRaw = document.getElementById('global-date-from')?.value || '';
  const toRaw = document.getElementById('global-date-to')?.value || '';
  let from = normalizeDateInput(fromRaw) || '';
  let to = normalizeDateInput(toRaw) || '';
  if (from && to && from > to) {
    const tmp = from;
    from = to;
    to = tmp;
  }
  return { from, to };
}

function getEffectiveGlobalDateRange() {
  if (forecastPeriod === 'custom') return getCustomGlobalDateRange();
  return getDateRangeForPeriod(forecastPeriod);
}

function toggleGlobalDateInputs() {
  const wrap = document.getElementById('global-date-wrap');
  if (!wrap) return;
  wrap.classList.toggle('is-active', forecastPeriod === 'custom');
}

function applyCustomDateRange() {
  const fromInput = document.getElementById('global-date-from');
  const toInput = document.getElementById('global-date-to');
  if (!fromInput || !toInput) return;

  let from = normalizeDateInput(fromInput.value) || '';
  let to = normalizeDateInput(toInput.value) || '';

  if (from && to && from > to) {
    const tmp = from;
    from = to;
    to = tmp;
  }

  fromInput.value = from;
  toInput.value = to;
  setPeriod('custom');
}

function clearCustomDateRange() {
  const fromInput = document.getElementById('global-date-from');
  const toInput = document.getElementById('global-date-to');
  if (fromInput) fromInput.value = '';
  if (toInput) toInput.value = '';
  setPeriod('all');
}

function getFiltered() {
  const globalRange = getEffectiveGlobalDateRange();

  // Static filters
  const stages   = filterGroupState['stage']  ? getChecked('stage')  : null;
  const statuses = filterGroupState['status'] ? getChecked('status') : null;
  const sources  = filterGroupState['source'] ? getChecked('source') : null;
  const dateFrom = filterGroupState['date']   ? document.getElementById('date-from').value : '';
  const dateTo   = filterGroupState['date']   ? document.getElementById('date-to').value   : '';

  // Pre-collect active dynamic filters (only those with visible DOM elements)
  const activeDyn = DYNAMIC_COL_DEFS.filter(d => {
    if (!filterGroupState[d.key]) return false;
    const el = document.getElementById('dyn-fg-' + d.col);
    return el && el.style.display !== 'none';
  });

  return RAW_DATA.filter(r => {
    const createdIso = normalizeDateScalar(r.Date_Creation);
    if (globalRange.from || globalRange.to) {
      if (!createdIso) return false;
      if (globalRange.from && createdIso < globalRange.from) return false;
      if (globalRange.to && createdIso > globalRange.to) return false;
    }

    // Static checks
    if (stages) {
      const stageVal = cleanNullableString(r.Funnel_Stage) || EMPTY_FILTER_VALUE;
      if (!stages.includes(stageVal)) return false;
    }
    if (statuses) {
      const statusVal = cleanNullableString(r.Status) || EMPTY_FILTER_VALUE;
      if (!statuses.includes(statusVal)) return false;
    }
    if (sources) {
      const sourceVal = cleanNullableString(r.Source_Lead) || EMPTY_FILTER_VALUE;
      if (!sources.includes(sourceVal)) return false;
    }
    if (dateFrom && r.Date_Next_Action && r.Date_Next_Action < dateFrom)  return false;
    if (dateTo   && r.Date_Next_Action && r.Date_Next_Action > dateTo)    return false;

    // Dynamic checks
    for (const def of activeDyn) {
      const val = r[def.col];
      if (def.type === 'checkbox') {
        const checked = getChecked(def.key);
        const valNorm = cleanNullableString(val);
        const valKey = valNorm === null ? EMPTY_FILTER_VALUE : String(valNorm);
        if (checked.length < def.uniqueVals.length && !checked.includes(valKey)) return false;
      } else if (def.type === 'date') {
        const from = document.getElementById('dyn-from-' + def.col)?.value || '';
        const to   = document.getElementById('dyn-to-'   + def.col)?.value || '';
        const sv   = val ? String(val).slice(0,10) : '';
        if (from && sv && sv < from) return false;
        if (to   && sv && sv > to)   return false;
      } else if (def.type === 'range') {
        const minV = parseFloat(document.getElementById('dyn-min-' + def.col)?.value ?? '');
        const maxV = parseFloat(document.getElementById('dyn-max-' + def.col)?.value ?? '');
        const n = typeof val === 'number' ? val : parseFloat(val) || 0;
        if (!isNaN(minV) && n < minV) return false;
        if (!isNaN(maxV) && n > maxV) return false;
      } else {
        const q = (document.getElementById('dyn-txt-' + def.col)?.value || '').toLowerCase().trim();
        if (q && !String(val ?? '').toLowerCase().includes(q)) return false;
      }
    }
    return true;
  });
}

// Forecast period
let forecastPeriod = 'all';

function setPeriod(p) {
  forecastPeriod = p;
  document.querySelectorAll('#period-chips .period-chip[data-period]').forEach(el => {
    el.classList.toggle('active', el.dataset.period === p);
  });
  toggleGlobalDateInputs();
  applyFilters();
}

function calcForecast(openRows) {
  const fc = r => {
    const value = Number(r.Forecast_Deal_Value);
    return Number.isFinite(value) && value > 0 ? value : 0;
  };
  return openRows.reduce((sum, row) => sum + fc(row), 0);
}

function updateForecastKPI() {
  if (!cachedOpen) return;
  document.getElementById('kv-forecast').textContent = fmtBRLshort(calcForecast(cachedOpen));
}


// APPLY FILTERS (main) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function applyFilters() {
  const data = getFiltered();
  ensureDbSchema(data);
  data.forEach(enrichComputedFields);
  const st = r => (r.Status||'Open').trim();
  const open = data.filter(r => st(r) === 'Open');
  const openView = activeQuickView === 'all' ? open : open.filter(rowMatchesQuickView);
  const won  = data.filter(r => st(r) === 'Closed - Won');
  const lost = data.filter(r => st(r) === 'Closed - Lost' || st(r) === 'Internal denial');

  // Cache for chart-filter re-render; clear any active chart selection
  cachedOpen = open; cachedWon = won; cachedLost = lost;
  Object.keys(chartHighlightState).forEach(k => chartHighlightState[k] = new Set());

  // Record count
  document.getElementById('countDisplay').textContent = data.length;

  // â”€â”€ KPIs
  const overdueCnt = open.filter(r => isOverdue(r.Date_Next_Action)).length;
  const dueTodayCnt = open.filter(r => isDueToday(r.Date_Next_Action)).length;
  const next7Cnt = open.filter(r => isDueSoon(r.Date_Next_Action) && !isDueToday(r.Date_Next_Action)).length;
  const noNextActionCnt = open.filter(r => isNoNextAction(r.Date_Next_Action)).length;
  const _fcOpen = r => (s => isFinite(s) && s > 0 ? s : 0)(+r.Forecast_Deal_Value);
  const _estOpen= r => (s => isFinite(s) && s > 0 ? s : 0)(+r.Estimated_Value);
  const totalFc  = calcForecast(open);
  const totalEst = open.reduce((s,r) => s + _estOpen(r), 0);
  const wonVal     = won.reduce((s,r) => s + (r.Estimated_Value||0), 0);
  const avgDays    = open.length ? (open.reduce((s,r) => s + (r.Days_on_Stage||0), 0) / open.length) : 0;

  document.getElementById('kv-open').textContent = open.length;
  document.getElementById('kv-forecast').textContent = fmtBRLshort(totalFc);
  document.getElementById('kv-estimated').textContent = fmtBRLshort(totalEst);
  document.getElementById('kv-won').textContent = won.length;
  document.getElementById('ks-won').textContent = fmtBRL(wonVal);
  document.getElementById('kv-overdue').textContent = overdueCnt;
  document.getElementById('kv-days').textContent = Math.round(avgDays) + ' d';
  updateQuickViewSummary(open);

  const kvOpenSub = document.querySelector('#kpi-open .kpi-sub');
  if (kvOpenSub) kvOpenSub.textContent = noNextActionCnt + ' no next action';

  const kpiDaysSub = document.querySelector('#kpi-open + #kpi-forecast-card + .kpi-card + .kpi-card + #kpi-overdue + .kpi-card .kpi-sub');
  if (kpiDaysSub) kpiDaysSub.textContent = dueTodayCnt + ' due today | ' + next7Cnt + ' next 7d';

  const kpiOverdue = document.getElementById('kpi-overdue');
  kpiOverdue.classList.toggle('danger', overdueCnt > 0);

  // â”€â”€ CHARTS
  renderCharts(data, open, won, lost);

  // â”€â”€ TABLES
  renderFollowupTable(openView);
  renderClosedTable(won, lost);
}

// â”€â”€ CHARTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const CHART_DEFAULTS = {
  color: '#ccc',
  plugins: { legend: { labels: { color: '#ccc', font: { family: 'Inter', size: 11 } } } },
  scales: {}
};
function darkScales(axis) {
  const base = {
    ticks: { color: '#ccc', font: { family: 'Inter', size: 10, weight: '600' } },
    grid: { color: 'rgba(255,255,255,0.06)' }
  };
  return axis === 'xy' ? { x: base, y: base } :
         axis === 'x'  ? { x: base } : { y: base };
}
function isLightTheme() {
  return document.body.classList.contains('theme-light');
}
function getChartTheme() {
  const light = isLightTheme();
  const compact = window.innerWidth <= 900;
  const axisLg = light ? (compact ? 12 : 11) : 11;
  const axisMd = light ? (compact ? 11 : 10) : 10;
  const axisSm = light ? (compact ? 10 : 8) : 8;
  const axisXs = light ? (compact ? 10 : 9) : 9;
  return {
    isLight: light,
    tick: light ? '#213125' : '#ccc',
    tickMuted: light ? '#3f5243' : '#888',
    legend: light ? '#27392b' : '#ccc',
    legendMuted: light ? '#4d6051' : '#888',
    grid: light ? 'rgba(21,32,23,0.10)' : 'rgba(255,255,255,0.06)',
    showGrid: !light,
    barBorder: light ? 'rgba(21,32,23,0.38)' : 'rgba(255,255,255,0.14)',
    doughnutBorder: light ? '#ffffff' : '#111111',
    weekBarFill: light ? 'rgba(78,153,52,0.85)' : 'rgba(106,191,75,0.70)',
    weekBarStroke: light ? '#2f6f22' : 'rgba(106,191,75,1)',
    axisLg,
    axisMd,
    axisSm,
    axisXs
  };
}
function destroyChart(id) {
  if (charts[id]) { charts[id].destroy(); delete charts[id]; }
}

// â”€â”€ CHART FILTER STATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let cachedOpen = [], cachedWon = [], cachedLost = [];
// chartHighlightState[key] = Set<index> (empty Set = nothing selected)
const chartHighlightState = {};
const chartBaseColors = {}; // key â†’ { colors, dsIdx }


let _chartRelayoutTimer = null;
let _lastDevicePixelRatio = window.devicePixelRatio || 1;
let _dprMediaQuery = null;

function resizeAllCharts() {
  Object.values(charts).forEach(ch => {
    if (!ch) return;
    try { ch.resize(); } catch (_) {}
  });
}

function scheduleChartViewportSync() {
  clearTimeout(_chartRelayoutTimer);
  _chartRelayoutTimer = setTimeout(() => {
    const nowDpr = window.devicePixelRatio || 1;
    const dprChanged = Math.abs(nowDpr - _lastDevicePixelRatio) > 0.001;
    _lastDevicePixelRatio = nowDpr;
    if (dprChanged) {
      applyFilters();
    } else {
      resizeAllCharts();
    }
    requestAnimationFrame(() => resizeAllCharts());
  }, 160);
}

function onDprChange() {
  scheduleChartViewportSync();
  bindDprWatcher();
}

function bindDprWatcher() {
  if (!window.matchMedia) return;
  if (_dprMediaQuery) {
    if (_dprMediaQuery.removeEventListener) _dprMediaQuery.removeEventListener('change', onDprChange);
    else if (_dprMediaQuery.removeListener) _dprMediaQuery.removeListener(onDprChange);
  }
  _dprMediaQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
  if (_dprMediaQuery.addEventListener) _dprMediaQuery.addEventListener('change', onDprChange);
  else if (_dprMediaQuery.addListener) _dprMediaQuery.addListener(onDprChange);
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function dimColors(baseColors, activeSet) {
  // activeSet = Set of active indices (or empty = restore all)
  const dimAlpha = isLightTheme() ? 0.28 : 0.18;
  if (!activeSet || activeSet.size === 0) return [...baseColors];
  return baseColors.map((c,i) =>
    activeSet.has(i) ? c : (c.startsWith('#') ? hexToRgba(c,dimAlpha) : c.replace(/[\d.]+\)$/, dimAlpha + ')'))
  );
}

function resetChartColors(key) {
  if (charts[key] && chartBaseColors[key]) {
    const { colors, dsIdx } = chartBaseColors[key];
    charts[key].data.datasets[dsIdx].backgroundColor = [...colors];
    charts[key].update('none');
  }
  chartHighlightState[key] = new Set();
}

function highlightChartItem(chartKey, index, baseColors, dsIdx=0, ctrlHeld=false) {
  chartBaseColors[chartKey] = { colors:[...baseColors], dsIdx };
  const chart = charts[chartKey];
  if (!chart) return;

  if (!chartHighlightState[chartKey]) chartHighlightState[chartKey] = new Set();

  if (!ctrlHeld) {
    // Plain click: clear ALL charts, then select only this item
    Object.keys(chartHighlightState).forEach(k => {
      if (k !== chartKey) resetChartColors(k);
    });

    const sel = chartHighlightState[chartKey];
    const onlyThis = sel.size === 1 && sel.has(index);
    sel.clear();
    if (!onlyThis) sel.add(index); // toggle off if already the sole selection
  } else {
    // Ctrl+click: toggle this item in THIS chart only, don't touch others
    const sel = chartHighlightState[chartKey];
    if (sel.has(index)) sel.delete(index);
    else                sel.add(index);
  }

  const sel = chartHighlightState[chartKey];
  chart.data.datasets[dsIdx].backgroundColor = dimColors(baseColors, sel);
  chart.update('none');
  renderTablesWithFilter();
}

// Build one filter function per active chart (OR within chart, AND across charts)
function buildChartFilters() {
  return Object.entries(chartHighlightState)
    .filter(([, sel]) => sel && sel.size > 0)
    .map(([key, sel]) => {
      const chart = charts[key];
      if (!chart) return null;
      const perItem = [...sel].map(idx => buildSingleFilter(key, idx, chart)).filter(Boolean);
      return perItem.length ? r => perItem.some(f => f(r)) : null;
    })
    .filter(Boolean);
}

function buildSingleFilter(chartKey, index, chart) {
  const label = chart.data.labels ? chart.data.labels[index] : null;
  switch (chartKey) {
    case 'funnel':  return r => r.Funnel_Stage === label;
    case 'quarter': return r => {
      const direct = r['Forecast _Date'];
      if (direct) return String(direct).trim().replace('_', 'Q').replace(/\s+/g, '') === label;
      const iso = normalizeDateScalar(r.Date_Creation);
      if (!iso) return false;
      const d = new Date(iso + 'T00:00:00');
      const q = `${String(d.getFullYear()).slice(2)}Q${Math.ceil((d.getMonth() + 1) / 3)}`;
      return q === label;
    };
    case 'source':  return r => r.Source_Lead === label;
    case 'week': return r => getIsoWeekYearLabelFromRow(r) === label;
    case 'monthStage': {
      // index â†’ month key â†’ filter by Date_Creation month
      const allMonths = [...new Set(
        RAW_DATA.map(r=>r.Date_Creation?String(r.Date_Creation).slice(0,7):null).filter(Boolean)
      )].sort();
      const ym = allMonths[index];
      return r => ym && String(r.Date_Creation||'').slice(0,7) === ym;
    }
    case 'days': {
      const ranges = [[0,30],[31,60],[61,90],[91,120],[121,Infinity]];
      const [mn,mx] = ranges[index];
      return r => { const d = r.Days_on_Stage||0; return d >= mn && d <= mx; };
    }
    default: return null;
  }
}

function renderTablesWithFilter() {
  const filters = buildChartFilters(); // AND across charts
  const pass = filters.length ? r => filters.every(f => f(r)) : null;
  const openBase = pass ? cachedOpen.filter(pass) : cachedOpen;
  const openView = activeQuickView === 'all' ? openBase : openBase.filter(rowMatchesQuickView);
  renderFollowupTable(openView);
  renderClosedTable(
    pass ? cachedWon.filter(pass)  : cachedWon,
    pass ? cachedLost.filter(pass) : cachedLost
  );
}

function renderCharts(data, open, won, lost) {
  const chartTheme = getChartTheme();
  const tooltipSkin = chartTheme.isLight
    ? {
        backgroundColor: 'rgba(255,255,255,0.98)',
        titleColor: '#122015',
        bodyColor: '#1e2d21',
        borderColor: 'rgba(21,32,23,0.24)',
        borderWidth: 1,
        titleFont: { family: 'Inter', size: 11, weight: '700' },
        bodyFont: { family: 'Inter', size: 11, weight: '600' },
        padding: 10,
        boxPadding: 4
      }
    : {
        backgroundColor: 'rgba(12,16,13,0.95)',
        titleColor: '#f0f4f1',
        bodyColor: '#d8e0da',
        borderColor: 'rgba(255,255,255,0.16)',
        borderWidth: 1,
        titleFont: { family: 'Inter', size: 11, weight: '700' },
        bodyFont: { family: 'Inter', size: 11, weight: '600' },
        padding: 10,
        boxPadding: 4
      };
  const tip = (cfg = {}) => Object.assign({}, tooltipSkin, cfg);
  const statusStripEl = document.getElementById('status-strip');
  const chartEls = [
    document.getElementById('chartQuarter'),
    document.getElementById('chartDays'),
    document.getElementById('chartFunnel'),
    document.getElementById('chartSource'),
    document.getElementById('chartWeek'),
    document.getElementById('chartMonthStage')
  ];
  if (!statusStripEl || chartEls.some(el => !el)) {
    Object.keys(charts).forEach(destroyChart);
    charts = {};
    return;
  }
  // â”€â”€ Status single chip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const wr = won.length+lost.length > 0 ? Math.round(won.length/(won.length+lost.length)*100) : null;
  statusStripEl.innerHTML = `
    <div class="status-chip-single">
      <div class="sc-item"><div class="sc-dot" style="background:#6ABF4B"></div><span>Open:</span><span class="sc-val">${open.length}</span></div>
      <div class="sc-item"><div class="sc-dot" style="background:#27AE60"></div><span>Won:</span><span class="sc-val">${won.length}</span></div>
      <div class="sc-item"><div class="sc-dot" style="background:#E74C3C"></div><span>Lost:</span><span class="sc-val">${lost.length}</span></div>
      <div class="sc-item"><div class="sc-dot" style="background:#3498DB"></div><span>Win Rate:</span><span class="sc-val">${wr !== null ? wr+'%' : '-'}</span></div>
    </div>`;

  // â”€â”€ Chart 1 - Forecast by Quarter â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  destroyChart('quarter');
  const forecastRows = [...open, ...won];
  const quarterKey = r => {
    const direct = r['Forecast _Date'];
    if (direct) return String(direct).trim().replace('_', 'Q').replace(/\s+/g, '');
    const iso = normalizeDateScalar(r.Date_Creation);
    if (!iso) return null;
    const d = new Date(iso + 'T00:00:00');
    return `${String(d.getFullYear()).slice(2)}Q${Math.ceil((d.getMonth() + 1) / 3)}`;
  };
  const forecastValue = r => {
    const fc = Number(r.Forecast_Deal_Value);
    if (Number.isFinite(fc) && fc > 0) return fc;
    const est = Number(r.Estimated_Value);
    return Number.isFinite(est) && est > 0 ? est : 0;
  };
  const qAgg = new Map();
  forecastRows.forEach(r => {
    const q = quarterKey(r);
    if (!q) return;
    qAgg.set(q, (qAgg.get(q) || 0) + forecastValue(r));
  });
  const quarters = [...qAgg.keys()].sort();
  const QTR_COLORS = chartTheme.isLight
    ? ['#4E9934','#2D86C2','#CC6D1C','#8853B3','#178F83','#C73D2E']
    : ['#6ABF4B','#3498DB','#E67E22','#9B59B6','#1ABC9C','#E74C3C'];
  const qtrFc = quarters.map(q => qAgg.get(q) || 0);
  const qColors = quarters.map((_,i) => QTR_COLORS[i % QTR_COLORS.length]);
  charts['quarter'] = new Chart(document.getElementById('chartQuarter'), {
    type:'bar',
    data:{ labels:quarters, datasets:[{ label:'Forecast (R$)', data:qtrFc, backgroundColor:[...qColors], borderColor:chartTheme.barBorder, borderWidth:1, borderRadius:4 }] },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:tip({callbacks:{label:ctx=>fmtBRL(ctx.raw)}}) },
      scales:{
        x:{ticks:{color:chartTheme.tick,font:{family:'Inter',size:chartTheme.axisLg,weight:'600'}},grid:{display:false}},
        y:{ticks:{color:chartTheme.tick,callback:v=>fmtBRLshort(v),font:{family:'Inter',size:chartTheme.axisMd,weight:'600'}},grid:{display:chartTheme.showGrid,color:chartTheme.grid}}
      },
      onClick:(evt,els)=>{ if(els.length) highlightChartItem('quarter',els[0].index,qColors,0,evt.native?.ctrlKey||evt.native?.metaKey); }
    }
  });
  document.getElementById('chartQuarter').style.cursor = 'pointer';

  // â”€â”€ Chart 2 - Stage Funnel (centered bars via stacked transparent offset) â”€
  destroyChart('funnel');
  const funnelCounts = STAGES.map(s => open.filter(r=>r.Funnel_Stage===s).length);
  const FUNNEL_COLORS = chartTheme.isLight
    ? ['#178F83','#4E9934','#2D86C2','#CC6D1C','#C73D2E']
    : ['#1ABC9C','#6ABF4B','#3498DB','#E67E22','#E74C3C'];
  const maxFunnel = Math.max(...funnelCounts, 1);
  const funnelOffsets = funnelCounts.map(c => (maxFunnel - c) / 2);
  charts['funnel'] = new Chart(document.getElementById('chartFunnel'), {
    type:'bar',
    data:{ labels:STAGES, datasets:[
      { label:'_offset', data:funnelOffsets, backgroundColor:'transparent', borderColor:'transparent', borderWidth:0, borderRadius:0 },
      { label:'Opportunities', data:funnelCounts, backgroundColor:[...FUNNEL_COLORS], borderColor:chartTheme.barBorder, borderWidth:1, borderRadius:4 }
    ]},
    options:{
      indexAxis:'y', responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{display:false},
        tooltip:tip({
          filter: item => item.datasetIndex === 1,
          callbacks:{ label:ctx => ctx.raw+' opportunities' }
        })
      },
      scales:{
        x:{ stacked:true, display:false, max: maxFunnel * 1.05 },
        y:{ stacked:true, ticks:{color:chartTheme.tick,font:{family:'Inter',size:chartTheme.axisLg}}, grid:{display:false} }
      },
      onClick:(evt,els)=>{
        const hit = els.find(e => e.datasetIndex === 1);
        if (hit) highlightChartItem('funnel',hit.index,FUNNEL_COLORS,1,evt.native?.ctrlKey||evt.native?.metaKey);
      }
    }
  });
  document.getElementById('chartFunnel').style.cursor = 'pointer';

  // â”€â”€ Chart 3 - Days on Stage histogram â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  destroyChart('days');
  const BINS = ['0-30','31-60','61-90','91-120','>120'];
  const BIN_COLORS = chartTheme.isLight
    ? ['#4E9934','#819E2F','#CC6D1C','#C73D2E','#73409A']
    : ['#6ABF4B','#A3C53A','#E67E22','#E74C3C','#8E44AD'];
  const dayRows = open;
  const binCounts = dayRows.reduce((acc,r) => {
    const d = r.Days_on_Stage||0;
    acc[d<=30?0:d<=60?1:d<=90?2:d<=120?3:4]++;
    return acc;
  }, [0,0,0,0,0]);
  charts['days'] = new Chart(document.getElementById('chartDays'), {
    type:'bar',
    data:{ labels:BINS, datasets:[{ label:'Opportunities', data:binCounts, backgroundColor:[...BIN_COLORS], borderColor:chartTheme.barBorder, borderWidth:1, borderRadius:4 }] },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:tip({callbacks:{label:ctx=>ctx.raw+' opps'}}) },
      scales:{
        x:{ticks:{color:chartTheme.tick,font:{family:'Inter',size:chartTheme.axisLg,weight:'600'}},grid:{display:false}},
        y:{ticks:{color:chartTheme.tick,font:{family:'Inter',size:chartTheme.axisMd,weight:'600'},stepSize:1},grid:{display:chartTheme.showGrid,color:chartTheme.grid}}
      },
      onClick:(evt,els)=>{ if(els.length) highlightChartItem('days',els[0].index,BIN_COLORS,0,evt.native?.ctrlKey||evt.native?.metaKey); }
    }
  });
  document.getElementById('chartDays').style.cursor = 'pointer';

  // â”€â”€ Chart 3b - Lead Source doughnut â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  destroyChart('source');
  const srcCounts = SOURCE_LIST.map(s => data.filter(r=>r.Source_Lead===s).length);
  const SRC_COLORS = chartTheme.isLight
    ? ['#4E9934','#2D86C2','#CC6D1C','#8853B3','#C73D2E']
    : ['#6ABF4B','#3498DB','#E67E22','#9B59B6','#E74C3C'];
  chartBaseColors['source'] = { colors:[...SRC_COLORS], dsIdx:0 };
  chartHighlightState['source'] = chartHighlightState['source'] || new Set();
  charts['source'] = new Chart(document.getElementById('chartSource'), {
    type:'doughnut',
    data:{ labels:SOURCE_LIST, datasets:[{ data:srcCounts, backgroundColor:[...SRC_COLORS], borderColor:chartTheme.doughnutBorder, borderWidth:2 }] },
    options:{
      responsive:true, maintainAspectRatio:false, cutout:'62%',
      plugins:{
        legend:{position:'bottom',labels:{color:chartTheme.legend,font:{family:'Inter',size:9,weight:'600'},boxWidth:8,padding:6}},
        tooltip:tip({callbacks:{label:ctx=>ctx.label+': '+ctx.raw}})
      },
      onClick:(evt,els)=>{ if(els.length) highlightChartItem('source',els[0].index,SRC_COLORS,0,evt.native?.ctrlKey||evt.native?.metaKey); }
    }
  });
  document.getElementById('chartSource').style.cursor = 'pointer';

  // â”€â”€ Chart 5 - New Opportunities by Week â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  destroyChart('week');
  const weekMap = {};
  data.forEach(r => {
    const key = getIsoWeekYearLabelFromRow(r);
    if (!key) return;
    weekMap[key] = (weekMap[key] || 0) + 1;
  });
  const weekKeys = Object.keys(weekMap).sort(compareIsoWeekYearLabels);
  const weekCounts = weekKeys.map(k => weekMap[k]);
  charts['week'] = new Chart(document.getElementById('chartWeek'), {
    type:'bar',
    data:{
      labels: weekKeys,
      datasets:[{ label:'Opportunities', data:weekCounts,
        backgroundColor:chartTheme.weekBarFill, borderColor:chartTheme.weekBarStroke,
        borderWidth:1, borderRadius:3 }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:tip({callbacks:{label:ctx=>'Opps: '+ctx.raw}}) },
      scales:{
        x:{ ticks:{color:chartTheme.tick,font:{size:chartTheme.axisSm,weight:'600'},maxRotation:60}, grid:{display:chartTheme.showGrid,color:chartTheme.grid} },
        y:{ ticks:{color:chartTheme.tick,font:{size:chartTheme.axisXs,weight:'600'},stepSize:1}, grid:{display:chartTheme.showGrid,color:chartTheme.grid}, beginAtZero:true }
      }
    }
  });

  // â”€â”€ Chart 6 - Opps by Creation Month Ãƒ- Stage (stacked) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  destroyChart('monthStage');
  // Build month labels sorted chronologically from Date_Creation
  const monthMap = {}; // "YYYY-MM" â†’ { stage: count }
  data.forEach(r => {
    if (!r.Date_Creation) return;
    const ym = String(r.Date_Creation).slice(0,7);
    if (!monthMap[ym]) monthMap[ym] = {};
    const st = r.Funnel_Stage || 'Unknown';
    monthMap[ym][st] = (monthMap[ym][st]||0) + 1;
  });
  const monthKeys = Object.keys(monthMap).sort();
  const monthLabels = monthKeys.map(ym => {
    const d = new Date(ym + '-01');
    return d.toLocaleString('en', {month:'short'}) + ' ' + String(d.getFullYear()).slice(2);
  });
  const FUNNEL_COLORS_MS = chartTheme.isLight
    ? ['#178F83','#4E9934','#2D86C2','#CC6D1C','#C73D2E']
    : ['#1ABC9C','#6ABF4B','#3498DB','#E67E22','#E74C3C'];
  const msDatasets = STAGES.map((stage, si) => ({
    label: stage,
    data: monthKeys.map(ym => (monthMap[ym]||{})[stage]||0),
    backgroundColor: FUNNEL_COLORS_MS[si],
    borderColor: chartTheme.barBorder,
    borderWidth: 1,
    borderRadius: 2
  }));
  // For highlight: flat index = monthKey index; filter = all stages in that month
  const msBaseColors = monthKeys.map((_,i) => '#6ABF4B'); // unused, handled inline
  chartHighlightState['monthStage'] = chartHighlightState['monthStage'] || new Set();
  charts['monthStage'] = new Chart(document.getElementById('chartMonthStage'), {
    type:'bar',
    data:{ labels: monthLabels, datasets: msDatasets },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{ position:'bottom', labels:{color:chartTheme.legendMuted,font:{family:'Inter',size:9},boxWidth:8,padding:6} },
        tooltip:tip({ mode:'index', intersect:false,
          callbacks:{ title: ctx => ctx[0].label, label: ctx => ctx.dataset.label+': '+ctx.raw }
        })
      },
      scales:{
        x:{ stacked:true, ticks:{color:chartTheme.tick,font:{size:chartTheme.axisSm,weight:'600'},maxRotation:45}, grid:{display:chartTheme.showGrid,color:chartTheme.grid} },
        y:{ stacked:true, ticks:{color:chartTheme.tick,font:{size:chartTheme.axisXs,weight:'600'},stepSize:1}, grid:{display:chartTheme.showGrid,color:chartTheme.grid}, beginAtZero:true }
      },
      onClick:(evt,els) => {
        if (!els.length) return;
        const idx = els[0].index;
        const ctrlHeld = evt.native?.ctrlKey || evt.native?.metaKey;
        if (!chartHighlightState['monthStage']) chartHighlightState['monthStage'] = new Set();
        if (!ctrlHeld) {
          Object.keys(chartHighlightState).forEach(k => { if(k!=='monthStage') resetChartColors(k); });
          const sel = chartHighlightState['monthStage'];
          const only = sel.size===1 && sel.has(idx);
          sel.clear(); if(!only) sel.add(idx);
        } else {
          const sel = chartHighlightState['monthStage'];
          if(sel.has(idx)) sel.delete(idx); else sel.add(idx);
        }
        // Dim non-selected months across all datasets
        msDatasets.forEach((ds, si) => {
          const sel2 = chartHighlightState['monthStage'];
          charts['monthStage'].data.datasets[si].backgroundColor =
            sel2.size === 0 ? FUNNEL_COLORS_MS[si] :
            monthKeys.map((_,i) => sel2.has(i) ? FUNNEL_COLORS_MS[si] :
              FUNNEL_COLORS_MS[si].replace(/^#/, '') === FUNNEL_COLORS_MS[si].replace(/^#/,'') ?
              hexToRgba(FUNNEL_COLORS_MS[si], isLightTheme() ? 0.28 : 0.18) : FUNNEL_COLORS_MS[si]);
        });
        charts['monthStage'].update('none');
        renderTablesWithFilter();
      }
    }
  });
  document.getElementById('chartMonthStage').style.cursor = 'pointer';
}

// â”€â”€ SORT STATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let tableSort = { col: 'Priority_Score', dir: 'desc' };
let colFilters = {};
let colFiltersVisible = false;

let closedSort = { col: 'ID_Opportunity', dir: 'asc' };
function sortClosedBy(col) {
  if (closedSort.col === col) { closedSort.dir = closedSort.dir === 'asc' ? 'desc' : 'asc'; }
  else { closedSort.col = col; closedSort.dir = 'asc'; }
  updateClosedSortIndicators();
  applyFilters();
}
function updateClosedSortIndicators() {
  document.querySelectorAll('#closed-sort-header-row th').forEach(th => th.classList.remove('sort-active'));
  const safeKey = SORT_IND_ID[closedSort.col] || closedSort.col;
  const ind = document.getElementById('csi-' + safeKey);
  if (ind) { ind.textContent = closedSort.dir === 'asc' ? 'â–²' : 'â–¼'; ind.closest('th').classList.add('sort-active'); }
}
function sortClosedRows(rows) {
  const { col, dir } = closedSort;
  return [...rows].sort((a, b) => {
    const av = a[col], bv = b[col];
    let cmp;
    if (col === 'SLA_Label') { cmp = (a.SLA_Sort ?? 9999) - (b.SLA_Sort ?? 9999); }
    else if (SORT_NUMERIC.has(col)) { cmp = (parseFloat(av)||0) - (parseFloat(bv)||0); }
    else if (SORT_DATE.has(col)) {
      if (!av && !bv) cmp = 0; else if (!av) cmp = 1; else if (!bv) cmp = -1;
      else cmp = av < bv ? -1 : av > bv ? 1 : 0;
    } else {
      const as = String(av??'').toLowerCase(), bs = String(bv??'').toLowerCase();
      if (!as && !bs) cmp = 0; else if (!as) cmp = 1; else if (!bs) cmp = -1;
      else cmp = as < bs ? -1 : as > bs ? 1 : 0;
    }
    return dir === 'desc' ? -cmp : cmp;
  });
}

function sortBy(col) {
  if (tableSort.col === col) {
    tableSort.dir = tableSort.dir === 'asc' ? 'desc' : 'asc';
  } else {
    tableSort.col = col;
    tableSort.dir = 'asc';
  }
  updateSortIndicators();
  applyFilters(); // re-render table
}

function updateSortIndicators() {
  document.querySelectorAll('#sort-header-row th').forEach(th => th.classList.remove('sort-active'));
  const safeKey = SORT_IND_ID[tableSort.col] || tableSort.col;
  const ind = document.getElementById('si-' + safeKey);
  if (ind) {
    ind.textContent = tableSort.dir === 'asc' ? 'â–²' : 'â–¼';
    ind.closest('th').classList.add('sort-active');
  }
}

function setColFilter(col, val) {
  if (val.trim() === '') delete colFilters[col];
  else colFilters[col] = val.trim().toLowerCase();
  applyFilters();
}

function setColFiltersVisible(visible) {
  colFiltersVisible = visible;
  ['col-filter-row','closed-col-filter-row'].forEach(id => {
    const el = document.getElementById(id); if(el) el.style.display = visible ? '' : 'none';
  });
  const btn = document.getElementById('col-filter-btn');
  if (btn) { btn.classList.toggle('active', visible); btn.textContent = visible ? 'Column Filters' : 'Column Filters'; }
}
function toggleColFilters() {
  setColFiltersVisible(!colFiltersVisible);
  if (!colFiltersVisible) {
    colFilters = {};
    document.querySelectorAll('#col-filter-row input, #closed-col-filter-row input').forEach(i => i.value='');
    applyFilters();
  }
}

function applyColFilters(rows) {
  return rows.filter(r => {
    return Object.entries(colFilters).every(([col, val]) => {
      const v = String(r[col] ?? '').toLowerCase();
      // numeric: interpret filter as range prefix like ">50000" or plain text match
      if (val.startsWith('>')) { const n = parseFloat(val.slice(1)); return !isNaN(n) && (parseFloat(r[col])||0) > n; }
      if (val.startsWith('<')) { const n = parseFloat(val.slice(1)); return !isNaN(n) && (parseFloat(r[col])||0) < n; }
      return v.includes(val);
    });
  });
}

const SORT_NUMERIC = new Set(['ID_Opportunity','Estimated_Value','Forecast_Deal_Value','Probability','Days_on_Stage','Health_Score','Priority_Score']);
const SORT_DATE    = new Set(['Date_Next_Action','Date_Creation','Date_Actual_Stage','Forecast_Date','Forecast _Date','Date_Last_Contact']);
const SORT_IND_ID  = { 'Type of service': 'ServiceType', 'Forecast _Date': 'FcstQtr' };

function sortRows(rows) {
  const { col, dir } = tableSort;
  return [...rows].sort((a, b) => {
    const av = a[col], bv = b[col];
    let cmp;
    if (col === 'SLA_Label') {
      cmp = (a.SLA_Sort ?? 9999) - (b.SLA_Sort ?? 9999);
    } else if (SORT_NUMERIC.has(col)) {
      cmp = (parseFloat(av) || 0) - (parseFloat(bv) || 0);
    } else if (SORT_DATE.has(col)) {
      if (!av && !bv) cmp = 0;
      else if (!av) cmp = 1; else if (!bv) cmp = -1;
      else cmp = av < bv ? -1 : av > bv ? 1 : 0;
    } else {
      const as = String(av ?? '').toLowerCase(), bs = String(bv ?? '').toLowerCase();
      if (!as && !bs) cmp = 0;
      else if (!as) cmp = 1; else if (!bs) cmp = -1;
      else cmp = as < bs ? -1 : as > bs ? 1 : 0;
    }
    return dir === 'desc' ? -cmp : cmp;
  });
}

// â”€â”€ FOLLOW-UP TABLE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function urgBadge(u) {
  if (!u) return '';
  const cls = u==='High'?'badge-urg-high':u==='Medium'?'badge-urg-mid':'badge-urg-low';
  return `<span class="${cls}">${u}</span>`;
}
function probBadge(p) {
  if (p===undefined||p===null||p==='') return '-';
  const pct = Math.round(p*100);
  const cls = pct>=70?'badge-prob-high':pct>=40?'badge-prob-mid':'badge-prob-low';
  return `<span class="badge ${cls}">${pct}%</span>`;
}

// â”€â”€ CELL RENDERER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function healthBadge(score) {
  const s = Math.round(Number(score) || 0);
  const cls = s >= 70 ? 'badge-health-high' : s >= 40 ? 'badge-health-mid' : 'badge-health-low';
  return `<span class="badge ${cls}">${s}</span>`;
}
function slaBadge(r) {
  const cls = r.SLA_Class || 'sla-none';
  const label = r.SLA_Label || 'No date';
  return `<span class="sla-chip ${cls}">${label}</span>`;
}
function getPriorityBadgeClass(score) {
  if (score >= 75) return 'badge-priority-critical';
  if (score >= 55) return 'badge-priority-high';
  if (score >= 35) return 'badge-priority-medium';
  return 'badge-priority-low';
}
function priorityBadge(score, label) {
  const s = Math.round(Number(score) || 0);
  return `<span class="badge ${getPriorityBadgeClass(s)}">${escHtml(label || getPriorityLabel(s))} ${s}</span>`;
}
function renderCell(r, col) {
  const def = COL_DEF_MAP.get(col);
  if (!def) return '<td>-</td>';
  switch(col) {
    case 'ID':
      return `<td data-col="ID"><span class="opp-id-link" onclick="showOpportunity(${r.ID_Opportunity})">${r.ID_Opportunity||''}</span></td>`;
    case 'Company':
      return `<td data-col="Company"><span class="opp-link" onclick="showOpportunity(${r.ID_Opportunity}, 'company')">${escHtml(r.Company||'-')}</span></td>`;
    case 'Contact':
      return `<td data-col="Contact"><span class="opp-link" onclick="showOpportunity(${r.ID_Opportunity}, 'contact')">${escHtml(r.Contact_Company||'-')}</span></td>`;
    case 'Stage':
      return `<td data-col="Stage"><span class="badge badge-stage">${r.Funnel_Stage||'-'}</span></td>`;
    case 'EstValue':
      return `<td data-col="EstValue">${fmtBRL(r.Estimated_Value)}</td>`;
    case 'Forecast':
      return `<td data-col="Forecast">${fmtBRL(r.Forecast_Deal_Value)}</td>`;
    case 'Prob':
      return `<td data-col="Prob">${probBadge(r.Probability)}</td>`;
    case 'Priority':
      return `<td data-col="Priority">${priorityBadge(r.Priority_Score, r.Priority_Label)}</td>`;
    case 'Health':
      return `<td data-col="Health">${healthBadge(r.Health_Score)}</td>`;
    case 'NextAction': {
      const status = normalizeOpportunityStatus(r.Status);
      if (status && status !== STATUS_OPEN) {
        return `<td data-col="NextAction" class="date-na">N/A</td>`;
      }
      const ov=isOverdue(r.Date_Next_Action), ds=isDueSoon(r.Date_Next_Action);
      const cls=ov?'date-overdue':ds?'date-soon':'';
      return `<td data-col="NextAction" class="${cls}">${r.Date_Next_Action ? fmtDate(r.Date_Next_Action) : '-'}</td>`;
    }
    case 'SLA':
      return `<td data-col="SLA">${slaBadge(r)}</td>`;
    case 'Notes':
      return `<td data-col="Notes" title="${(r.OBS||'').replace(/"/g,'&quot;')}">${r.OBS||'-'}</td>`;
    case 'Urgency':
      return `<td data-col="Urgency">${urgBadge(r.Urgency)}</td>`;
    case 'LostReason':
      return `<td data-col="LostReason" style="color:var(--red)">${r.Reason_Lost||'-'}</td>`;
    case 'Description':
      return `<td data-col="Description" title="${(r.Description||'').replace(/"/g,'&quot;')}">${r.Description||'-'}</td>`;
    case 'Created':    return `<td data-col="Created">${fmtDate(r.Date_Creation)}</td>`;
    case 'StageSince': return `<td data-col="StageSince">${fmtDate(r.Date_Actual_Stage)}</td>`;
    case 'LastContact':return `<td data-col="LastContact">${fmtDate(r.Date_Last_Contact)}</td>`;
    default: {
      const v = r[def.field];
      return `<td data-col="${col}">${(v!==null&&v!==undefined&&v!=='')?String(v):'-'}</td>`;
    }
  }
}

function renderFollowupTable(open) {
  const tbody = document.getElementById('followup-tbody');
  const filtered = applyColFilters(open);
  const sorted = sortRows(filtered);
  visibleOpenRows = sorted;
  const visOrder = colOrder.filter(c => colVis[c] !== false);
  if (!sorted.length) {
    tbody.innerHTML = `<tr><td colspan="${visOrder.length}" class="empty-msg">No opportunities found for the selected filters.</td></tr>`;
    return;
  }
  let alt = 0;
  tbody.innerHTML = sorted.map(r => {
    const ov = isOverdue(r.Date_Next_Action), ds = isDueSoon(r.Date_Next_Action);
    const rowCls = ov?'overdue':ds?'due-soon':(alt++%2===0?'':'alt');
    return `<tr class="${rowCls}">${visOrder.map(col=>renderCell(r,col)).join('')}</tr>`;
  }).join('');
}

// â”€â”€ CLOSED DEALS TABLE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderClosedTable(won, lost) {
  const tbody = document.getElementById('closed-tbody');
  const all = [...won.map(r=>({...r,_cls:'won-row'})), ...lost.map(r=>({...r,_cls:'lost-row'}))];
  const visOrder = colOrder.filter(c => colVis[c] !== false);
  if (!all.length) {
    tbody.innerHTML = `<tr><td colspan="${visOrder.length}" class="empty-msg">No closed deals for the selected filters.</td></tr>`;
    return;
  }
  const filtered = applyColFilters(all);
  const sorted   = sortClosedRows(filtered);
  tbody.innerHTML = sorted.map(r =>
    `<tr class="${r._cls}">${visOrder.map(col=>renderCell(r,col)).join('')}</tr>`
  ).join('');
}
function toggleClosed() {
  const body  = document.getElementById('closed-body');
  const arrow = document.getElementById('closed-arrow');
  const open  = body.classList.toggle('open');
  arrow.textContent = open ? 'â–¼' : 'â–¶';
}

// â”€â”€ OPPORTUNITY MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderModalField(field, row) {
  const id = `opp-edit-${field.key}`;
  const value = row[field.key];
  const safe = value === null || value === undefined ? '' : String(value);
  const full = field.fullWidth ? ' full-width' : '';
  let control = '';
  if (field.type === 'select') {
    const opts = ['<option value=""></option>']
      .concat((field.options || []).map(opt => {
        const selected = String(opt) === safe ? ' selected' : '';
        return `<option value="${escAttr(opt)}"${selected}>${escHtml(opt)}</option>`;
      }))
      .join('');
    const extraAttr = field.key === 'Status' ? ' onchange="syncOpportunityEditStatusRule()"' : '';
    control = `<select id="${id}" class="opp-field-select"${extraAttr}>${opts}</select>`;
  } else if (field.type === 'textarea') {
    control = `<textarea id="${id}" class="opp-field-textarea">${escHtml(safe)}</textarea>`;
  } else {
    const inputType = field.type || 'text';
    const min = field.min !== undefined ? ` min="${field.min}"` : '';
    const max = field.max !== undefined ? ` max="${field.max}"` : '';
    const step = field.step !== undefined ? ` step="${field.step}"` : '';
    control = `<input id="${id}" class="opp-field-input" type="${inputType}" value="${escAttr(safe)}"${min}${max}${step}>`;
  }
  return `<div class="opp-field${full}"><div class="opp-field-label">${escHtml(field.label)}</div>${control}</div>`;
}

function renderOpportunityView(row) {
  const f = (v) => (v === null || v === undefined || v === '') ? '-' : escHtml(v);
  const fv = (v) => (v === null || v === undefined || v === '') ? '-' : fmtBRL(v);
  const fp = (v) => (v === null || v === undefined || v === '') ? '-' : Math.round(v*100)+'%';
  const fd = (v) => v ? fmtDate(v) : '-';
  const status = normalizeOpportunityStatus(row.Status);
  const nonOpenStatus = !!status && status !== STATUS_OPEN;
  return `
    <div class="opp-modal-toolbar">
      <button class="modal-btn primary" onclick="startOpportunityEdit()">Edit Fields</button>
    </div>
    <div class="opp-modal-title">${f(row.Company)} <span class="opp-id-meta">- #${row.ID_Opportunity}</span></div>
    <div class="opp-modal-sub">${f(row.Funnel_Stage)} - ${f(row.Status)}</div>
    <div class="opp-fields-grid">
      <div class="opp-field"><div class="opp-field-label">Seller</div><div class="opp-field-value">${f(row.Seller)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Contact</div><div class="opp-field-value">${f(row.Contact_Company)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Forecast Value</div><div class="opp-field-value highlight">${fv(row.Forecast_Deal_Value)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Estimated Value</div><div class="opp-field-value">${fv(row.Estimated_Value)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Probability</div><div class="opp-field-value">${fp(row.Probability)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Days on Stage</div><div class="opp-field-value">${f(row.Days_on_Stage)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Urgency</div><div class="opp-field-value">${f(row.Urgency)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Budget</div><div class="opp-field-value">${f(row.Budget)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Technical Fit</div><div class="opp-field-value">${f(row.Technical_Fit)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Relationship</div><div class="opp-field-value">${f(row.RelationShip_With_Customer)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Service Type</div><div class="opp-field-value">${f(row['Type of service'])}</div></div>
      <div class="opp-field"><div class="opp-field-label">Segment</div><div class="opp-field-value">${f(row.Segment)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Lead Source</div><div class="opp-field-value">${f(row.Source_Lead)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Office</div><div class="opp-field-value">${f(row.Office)}</div></div>
      <div class="opp-field"><div class="opp-field-label">State</div><div class="opp-field-value">${f(row.Estate)} / ${f(row.City)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Next Action</div><div class="opp-field-value" style="color:${nonOpenStatus?'var(--gray-mid)':isOverdue(row.Date_Next_Action)?'var(--red)':isDueSoon(row.Date_Next_Action)?'var(--orange)':'var(--white)'}">${formatNextActionDisplay(row)}</div></div>
      <div class="opp-field"><div class="opp-field-label">SLA</div><div class="opp-field-value">${escHtml(getSLAInfo(row).label)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Health Score</div><div class="opp-field-value">${computeHealthScore(row)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Approach Priority</div><div class="opp-field-value">${priorityBadge(row.Priority_Score, row.Priority_Label)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Forecast Quarter</div><div class="opp-field-value">${f(row['Forecast _Date'])}</div></div>
      <div class="opp-field"><div class="opp-field-label">Created</div><div class="opp-field-value">${fd(row.Date_Creation)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Stage Since</div><div class="opp-field-value">${fd(row.Date_Actual_Stage)}</div></div>
      ${row.Reason_Lost ? `<div class="opp-field"><div class="opp-field-label">Lost Reason</div><div class="opp-field-value" style="color:var(--red)">${escHtml(row.Reason_Lost)}</div></div>` : ''}
      <div class="opp-field full-width"><div class="opp-field-label">Notes / Next Step</div><div class="opp-field-value notes">${f(row.OBS)}</div></div>
    </div>`;
}

function renderOpportunityEdit(row) {
  return `
    <div class="opp-modal-toolbar">
      <button class="modal-btn" onclick="cancelOpportunityEdit()">Cancel</button>
      <button class="modal-btn primary" onclick="saveOpportunityEdits()">Save To DB</button>
    </div>
    <div class="opp-modal-title">Edit Opportunity <span class="opp-id-meta">- #${row.ID_Opportunity}</span></div>
    <div class="opp-modal-sub">${escHtml(row.Company || '-')} - ${escHtml(row.Contact_Company || '-')}</div>
    <div class="opp-fields-grid">
      ${MODAL_EDIT_FIELDS.map(field => renderModalField(field, row)).join('')}
    </div>`;
}

function renderOpportunityModal() {
  const row = RAW_DATA.find(d => d.ID_Opportunity === activeOpportunityId);
  if (!row) return;
  const body = document.getElementById('opp-modal-body');
  body.innerHTML = modalEditMode ? renderOpportunityEdit(row) : renderOpportunityView(row);
  if (modalEditMode) syncOpportunityEditStatusRule();
}

function showOpportunity(id) {
  activeOpportunityId = id;
  modalEditMode = false;
  renderOpportunityModal();
  document.getElementById('opp-modal').classList.add('open');
  document.getElementById('opp-modal').style.display = 'flex';
}

function startOpportunityEdit() {
  if (!activeOpportunityId) return;
  modalEditMode = true;
  renderOpportunityModal();
}

function cancelOpportunityEdit() {
  modalEditMode = false;
  renderOpportunityModal();
}

function syncOpportunityEditStatusRule() {
  const statusEl = document.getElementById('opp-edit-Status');
  const nextActionEl = document.getElementById('opp-edit-Date_Next_Action');
  if (!statusEl || !nextActionEl) return;
  const status = normalizeOpportunityStatus(statusEl.value) || STATUS_OPEN;
  const isOpen = status === STATUS_OPEN;
  nextActionEl.disabled = !isOpen;
  nextActionEl.title = isOpen ? '' : 'Next Action Date is only used when Status is Open.';
  if (!isOpen) nextActionEl.value = '';
}

function saveOpportunityEdits() {
  const row = RAW_DATA.find(d => d.ID_Opportunity === activeOpportunityId);
  if (!row) return;

  const updates = {};
  let changed = false;

  MODAL_EDIT_FIELDS.forEach(field => {
    const el = document.getElementById('opp-edit-' + field.key);
    if (!el) return;
    let next = el.value;
    if (field.type === 'number') {
      next = next === '' ? null : Number(next);
      if (next !== null && !Number.isFinite(next)) next = null;
    } else if (field.type === 'date') {
      next = normalizeDateInput(next);
    } else {
      next = next.trim();
      if (next === '') next = null;
    }
    const prev = row[field.key] === undefined ? null : row[field.key];
    if ((prev ?? null) !== (next ?? null)) {
      updates[field.key] = next;
      changed = true;
    }
  });

  if (!changed) {
    modalEditMode = false;
    renderOpportunityModal();
    showToast('No changes detected.');
    return;
  }

  const draft = { ...row, ...updates };
  const statusRule = applyOpportunityStatusRules(draft);
  const disciplineError = validateOpportunityDiscipline(draft);
  if (disciplineError) {
    showToast(disciplineError);
    return;
  }

  if ((row.Status ?? null) !== (draft.Status ?? null)) updates.Status = draft.Status;
  if ((row.Date_Next_Action ?? null) !== (draft.Date_Next_Action ?? null)) updates.Date_Next_Action = draft.Date_Next_Action;
  if (!Object.keys(updates).length) {
    modalEditMode = false;
    renderOpportunityModal();
    showToast('No changes detected.');
    return;
  }

  Object.keys(updates).forEach(k => {
    row[k] = updates[k];
  });
  enforceRowIntegrity(row);

  modalEditMode = false;
  applyFilters();
  renderOpportunityModal();
  const updateMsg = statusRule.clearedNextAction
    ? 'Opportunity updated. Next Action was cleared because status is not Open.'
    : 'Opportunity updated.';
  registerDbChange(updateMsg);
  showToast(updateMsg);
}
function closeModal() {
  if (modalEditMode) {
    const discard = confirm('There are unsaved edits in this card. Close without saving?');
    if (!discard) return;
    modalEditMode = false;
  }
  document.getElementById('opp-modal').classList.remove('open');
  document.getElementById('opp-modal').style.display = 'none';
  activeOpportunityId = null;
}

function getDbHeaders() {
  const headers = [];
  const seen = new Set();
  ensureDbSchema(RAW_DATA);
  RAW_DATA.forEach(row => {
    Object.keys(row || {}).forEach(key => {
      if (COMPUTED_EXPORT_SKIP.has(key)) return;
      if (seen.has(key)) return;
      seen.add(key);
      headers.push(key);
    });
  });
  return headers;
}

function updateDbSaveButton() {
  updateCurrentDbFileLabel();
  const btn = document.getElementById('btn-save-db');
  if (!btn) return;
  btn.classList.toggle('pending', dbDirty);
  btn.textContent = dbDirty ? 'Save DB (Pending)' : 'Save DB';
  const saveMode = currentDbHandle ? 'direct overwrite' : 'download';
  btn.title = `Current save target: ${currentDbFileName} (${saveMode})`;
}

async function exportDbWorkbook() {
  const integrity = enforceDatasetIntegrity(RAW_DATA);
  const headers = getDbHeaders();
  if (!headers.length) throw new Error('No DB rows available.');
  const rows = RAW_DATA.map(row => {
    const out = {};
    headers.forEach(h => { out[h] = row[h] ?? null; });
    return out;
  });
  const ws = XLSX.utils.json_to_sheet(rows, { header: headers });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'DB');

  const saveAsCsv = /\.csv$/i.test(currentDbFileName);

  if (currentDbHandle && typeof currentDbHandle.createWritable === 'function') {
    const writable = await currentDbHandle.createWritable();
    try {
      if (saveAsCsv) {
        const csv = XLSX.utils.sheet_to_csv(ws);
        await writable.write(csv);
      } else {
        const content = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        await writable.write(content);
      }
      await writable.close();
    } catch (err) {
      try { await writable.abort(); } catch (_) {}
      throw err;
    }
  } else if (saveAsCsv) {
    XLSX.writeFile(wb, currentDbFileName, { bookType: 'csv' });
  } else {
    XLSX.writeFile(wb, currentDbFileName);
  }

  return integrity;
}

async function ensureCurrentDbHandleForOverwrite() {
  if (currentDbHandle && typeof currentDbHandle.createWritable === 'function') return currentDbHandle;
  if (typeof window.showOpenFilePicker !== 'function') return null;

  const proceed = confirm('To overwrite the active DB, select the current DB file now.');
  if (!proceed) return null;

  const handle = await openDbHandleFromPicker();
  if (!handle) return null;

  currentDbHandle = handle;
  await persistCurrentDbHandle();
  setCurrentDbFileName(handle.name || currentDbFileName);
  updateDbSaveButton();
  return handle;
}

async function saveDbNow() {
  try {
    const disciplineIssues = getOpenDisciplineIssues(RAW_DATA);
    if (disciplineIssues.length) {
      const preview = disciplineIssues.slice(0, 12).join('\n');
      showToast('Save canceled. Open opportunities require Funnel Stage and Next Action Date.');
      alert(
        `Pipeline discipline check found ${disciplineIssues.length} issue(s).\n\n` +
        `${preview}${disciplineIssues.length > 12 ? '\n...' : ''}\n\n` +
        `Fix these records before saving the DB.`
      );
      return;
    }

    const criticalIssues = getCriticalFieldIssues(RAW_DATA);
    if (criticalIssues.length) {
      const preview = criticalIssues.slice(0, 12).join('\n');
      const proceed = confirm(
        `Critical fields check found ${criticalIssues.length} issue(s).\n\n${preview}${criticalIssues.length > 12 ? '\n...' : ''}\n\nDo you want to continue saving anyway?`
      );
      if (!proceed) {
        showToast('Save canceled. Fill critical fields before updating DB.');
        return;
      }
    }

    if (!currentDbHandle && typeof window.showOpenFilePicker === 'function') {
      const selectedHandle = await ensureCurrentDbHandleForOverwrite();
      if (!selectedHandle) {
        showToast('Save canceled. No DB file selected for overwrite.');
        return;
      }
    }

    const integrity = await exportDbWorkbook();
    if (currentDbHandle) await persistCurrentDbHandle();
    dbDirty = false;
    updateDbSaveButton();
    if (integrity.collisions.length) {
      showToast(`DB file updated (${currentDbFileName}). Integrity fixes applied: ${integrity.collisions.length} duplicated IDs.`);
    } else {
      showToast(`DB file updated (${currentDbFileName}).`);
    }
  } catch (err) {
    if (err && err.name === 'AbortError') {
      showToast('Save canceled.');
      return;
    }
    console.error(err);
    showToast('DB update failed: ' + err.message);
  }
}
function registerDbChange(reason) {
  dbDirty = true;
  updateDbSaveButton();
  const mustSyncNow = confirm(`${reason} This impacts the DB. Do you want to update the DB file now?`);
  if (mustSyncNow) saveDbNow();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeBulkEditModal();
    closeManageCrmModal();
  }
});

// â”€â”€ CLEAR FILTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function selectAll(name, allChecked) {
  document.querySelectorAll(`input[name="${name}"]`).forEach(cb => cb.checked = allChecked);
  applyFilters();
}

function toggleFilterValue(name, value) {
  const checkboxes = [...document.querySelectorAll(`input[name="${name}"]`)];
  const checked = checkboxes.filter(cb => cb.checked).map(cb => cb.value);
  // If only this value is already selected â†’ select all (deactivate filter)
  if (checked.length === 1 && checked[0] === value) {
    checkboxes.forEach(cb => cb.checked = true);
  } else {
    checkboxes.forEach(cb => cb.checked = cb.value === value);
  }
  applyFilters();
}

function clearFilters() {
  document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = true);
  document.getElementById('date-from').value = '';
  document.getElementById('date-to').value   = '';
  const gFrom = document.getElementById('global-date-from');
  const gTo = document.getElementById('global-date-to');
  if (gFrom) gFrom.value = '';
  if (gTo) gTo.value = '';
  forecastPeriod = 'all';
  document.querySelectorAll('#period-chips .period-chip[data-period]').forEach(el => {
    el.classList.toggle('active', el.dataset.period === 'all');
  });
  toggleGlobalDateInputs();
  activeQuickView = 'all';
  updateQuickViewButtons();
  document.querySelectorAll('#dynamic-filter-groups input').forEach(i => {
    if (i.type === 'checkbox') i.checked = true; else i.value = '';
  });
  applyFilters();
}

function openBulkEditModal() {
  if (!visibleOpenRows.length) {
    showToast('No visible opportunities to update.');
    return;
  }
  document.getElementById('bulk-edit-count').textContent = `${visibleOpenRows.length} records selected by current view`;
  document.getElementById('bulk-owner').value = '';
  document.getElementById('bulk-stage').value = '';
  document.getElementById('bulk-next-action').value = '';
  document.getElementById('bulk-urgency').value = '';
  const modal = document.getElementById('bulk-edit-modal');
  modal.classList.add('open');
  modal.style.display = 'flex';
}
function closeBulkEditModal() {
  const modal = document.getElementById('bulk-edit-modal');
  modal.classList.remove('open');
  modal.style.display = 'none';
}
function applyBulkEdit() {
  const owner = document.getElementById('bulk-owner').value.trim();
  const stage = document.getElementById('bulk-stage').value;
  const nextAction = normalizeDateInput(document.getElementById('bulk-next-action').value);
  const urgency = document.getElementById('bulk-urgency').value;
  if (!owner && !stage && !nextAction && !urgency) {
    showToast('Select at least one field to update.');
    return;
  }
  const ids = new Set(visibleOpenRows.map(r => r.ID_Opportunity));
  let updated = 0;
  let skipped = 0;
  RAW_DATA.forEach(r => {
    if (!ids.has(r.ID_Opportunity)) return;
    const draft = { ...r };
    if (owner) draft.Seller = owner;
    if (stage) draft.Funnel_Stage = stage;
    if (nextAction) draft.Date_Next_Action = nextAction;
    if (urgency) draft.Urgency = urgency;

    const disciplineError = validateOpportunityDiscipline(draft);
    if (disciplineError) {
      skipped++;
      return;
    }

    let changed = false;
    if (owner && r.Seller !== owner) { r.Seller = owner; changed = true; }
    if (stage && r.Funnel_Stage !== stage) { r.Funnel_Stage = stage; changed = true; }
    if (nextAction && r.Date_Next_Action !== nextAction) { r.Date_Next_Action = nextAction; changed = true; }
    if (urgency && r.Urgency !== urgency) { r.Urgency = urgency; changed = true; }
    if (changed) {
      enforceRowIntegrity(r);
      updated++;
    }
  });
  closeBulkEditModal();
  applyFilters();
  if (updated > 0) registerDbChange('Updated ' + updated + ' opportunities.');
  if (skipped > 0) showToast('Updated ' + updated + '. Skipped ' + skipped + ' due to pipeline discipline rules.');
  else showToast('Updated ' + updated + ' opportunities.');
}

// â”€â”€ COLUMN VISIBILITY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// â”€â”€ COLUMN DEFINITIONS (database order) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const COLUMN_DEFS = [
  {col:'ID',          field:'ID_Opportunity',             label:'ID',              defVis:true },
  {col:'Description', field:'Description',                label:'Opportunity Description', defVis:false},
  {col:'Created',     field:'Date_Creation',              label:'Created Date',    defVis:false},
  {col:'Week',        field:'Week',                       label:'Creation Week',   defVis:false},
  {col:'LeadSrc',     field:'Source_Lead',                label:'Lead Source',     defVis:false},
  {col:'Company',     field:'Company',                    label:'Company',         defVis:true },
  {col:'SizeCompany', field:'Size_Company',               label:'Company Size',    defVis:false},
  {col:'Contact',     field:'Contact_Company',            label:'Primary Contact', defVis:false},
  {col:'TaxID',       field:'Tax_ID',                     label:'Tax ID',          defVis:false},
  {col:'Segment',     field:'Segment',                    label:'Segment',         defVis:false},
  {col:'Country',     field:'Country',                    label:'Country',         defVis:false},
  {col:'State',       field:'Estate',                     label:'State / Region',  defVis:false},
  {col:'Seller',      field:'Seller',                     label:'Account Owner',   defVis:true },
  {col:'Office',      field:'Office',                     label:'Office',defVis:false},
  {col:'Stage',       field:'Funnel_Stage',               label:'Funnel Stage',    defVis:true },
  {col:'Status',      field:'Status',                     label:'Status',          defVis:false},
  {col:'LostReason',  field:'Reason_Lost',                label:'Lost Reason',     defVis:false},
  {col:'StageSince',  field:'Date_Actual_Stage',          label:'Stage Since Date',defVis:false},
  {col:'Days',        field:'Days_on_Stage',              label:'Days in Stage',   defVis:true },
  {col:'LastContact', field:'Date_Last_Contact',          label:'Last Contact',    defVis:false},
  {col:'DaysSinceLast',field:'Days_Since_Last_Contact',   label:'Days Since Last', defVis:false},
  {col:'NextAction',  field:'Date_Next_Action',           label:'Next Action',     defVis:true },
  {col:'SLA',         field:'SLA_Label',                  label:'SLA',             defVis:true },
  {col:'Health',      field:'Health_Score',               label:'Health',          defVis:true },
  {col:'Priority',    field:'Priority_Score',             label:'Priority Rank',   defVis:true },
  {col:'Notes',       field:'OBS',                        label:'Notes / Next Step',defVis:false},
  {col:'Relation',    field:'RelationShip_With_Customer', label:'Customer Relationship', defVis:false},
  {col:'Urgency',     field:'Urgency',                    label:'Urgency',         defVis:false},
  {col:'TechFit',     field:'Technical_Fit',              label:'Technical Fit',   defVis:false},
  {col:'Budget',      field:'Budget',                     label:'Budget',          defVis:false},
  {col:'Prob',        field:'Probability',                label:'Win Probability', defVis:true },
  {col:'ServiceType', field:'Type of service',            label:'Service Type',    defVis:false},
  {col:'Currency',    field:'Currency',                   label:'Currency',        defVis:false},
  {col:'FcstQtr',     field:'Forecast _Date',             label:'Forecast Quarter',defVis:false},
  {col:'EstValue',    field:'Estimated_Value',            label:'Estimated Value', defVis:true },
  {col:'Forecast',    field:'Forecast_Deal_Value',        label:'Forecast Value',  defVis:true },
];

let colOrder = COLUMN_DEFS.map(d => d.col);
const colVis    = Object.fromEntries(COLUMN_DEFS.map(d => [d.col, d.defVis]));
const COL_DEF_MAP = new Map(COLUMN_DEFS.map(d => [d.col, d]));

function countVisibleCols() {
  return colOrder.filter(c => colVis[c] !== false).length;
}
function ensureAtLeastOneVisibleColumn(preferred = 'ID') {
  if (countVisibleCols() > 0) return;
  const fallback = colOrder.includes(preferred) ? preferred : (colOrder[0] || 'ID');
  colVis[fallback] = true;
}

// â”€â”€ COLUMN WIDTHS (px) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const COL_WIDTHS = {
  ID:            72, Description: 320, Created:      130, Week:        120,
  LeadSrc:      180, Company:     260, SizeCompany:  150, Contact:     240,
  TaxID:        180, Segment:     170, Country:   130, State: 180,
  Seller:       180, Office:      200, Stage:        180, Status:      170,
  LostReason:   300, StageSince:  160, Days:         130, LastContact: 160,
  DaysSinceLast:170, NextAction:  150, SLA:          130, Health:      110, Priority: 160,
  Notes:        420, Relation:    280,
  Urgency:      150, TechFit:     180, Budget:       170, Prob:        160,
  ServiceType:  220, Currency:    110, FcstQtr:      180, EstValue:    190,
  Forecast:     200,
};

// â”€â”€ RENDER HEADERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderHeaders() {
  const visOrder = colOrder.filter(c => colVis[c] !== false);
  ['followup','closed'].forEach(tid => {
    const tableEl = document.getElementById(tid==='followup'?'followup-table':'closed-table');
    const hRow = document.getElementById(tid==='followup'?'sort-header-row':'closed-sort-header-row');
    const fRow = document.getElementById(tid==='followup'?'col-filter-row':'closed-col-filter-row');
    if (!hRow || !fRow) return;
    // Rebuild colgroup for fixed-layout alignment
    let cg = tableEl.querySelector('colgroup');
    if (!cg) { cg = document.createElement('colgroup'); tableEl.prepend(cg); }
    cg.innerHTML = visOrder.map(col => {
      const w = COL_WIDTHS[col] || 100;
      return `<col style="width:${w}px;min-width:${w}px">`;
    }).join('');
    const sortFn = tid==='followup' ? 'sortBy' : 'sortClosedBy';
    const siPfx  = tid==='followup' ? 'si-'    : 'csi-';
    const sState = tid==='followup' ? tableSort : closedSort;
    hRow.innerHTML = visOrder.map(col => {
      const def = COL_DEF_MAP.get(col); if(!def) return '';
      const sf  = def.field.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
      const sk  = SORT_IND_ID[def.field] || def.field;
      const act = sState.col===def.field ? ' sort-active' : '';
      const dir = sState.col===def.field ? (sState.dir==='asc'?'\u25b2':'\u25bc') : '\u25b2';
      return `<th class="sortable${act}" data-col="${col}" draggable="true" onclick="${sortFn}('${sf}')">${def.label}<span class="sort-ind" id="${siPfx}${sk}">${dir}</span></th>`;
    }).join('');
    fRow.innerHTML = visOrder.map(col => {
      const def = COL_DEF_MAP.get(col); if(!def) return '<td></td>';
      return `<td><input data-filtercol="${def.field}" placeholder="${def.label}" oninput="setColFilter(this.getAttribute('data-filtercol'),this.value)"></td>`;
    }).join('');
    fRow.querySelectorAll('input[data-filtercol]').forEach(inp => {
      const fc = inp.getAttribute('data-filtercol');
      if (colFilters[fc]) inp.value = colFilters[fc];
    });
    hRow.querySelectorAll('th[data-col]').forEach(th => initDrag(th, th.getAttribute('data-col')));
  });
}

function initDrag(th, col) {
  th.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', col);
    e.dataTransfer.effectAllowed = 'move';
    th.classList.add('dragging');
  });
  th.addEventListener('dragend', () => th.classList.remove('dragging'));
  th.addEventListener('dragover', e => { e.preventDefault(); th.classList.add('drag-over'); });
  th.addEventListener('dragleave', () => th.classList.remove('drag-over'));
  th.addEventListener('drop', e => {
    e.preventDefault(); th.classList.remove('drag-over');
    const from = e.dataTransfer.getData('text/plain'), to = col;
    if (from===to) return;
    const fi=colOrder.indexOf(from), ti=colOrder.indexOf(to);
    if (fi<0||ti<0) return;
    colOrder.splice(fi,1); colOrder.splice(ti,0,from);
    renderHeaders(); applyFilters();
  });
}

// â”€â”€ SHARED COLS PANEL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initColVisPanel() {
  const panel = document.getElementById('col-vis-panel');
  if (!panel || panel.dataset.built) return;
  panel.dataset.built = '1';
  const btnRow = document.createElement('div');
  btnRow.style.cssText = 'display:flex;gap:6px;margin-bottom:8px;';
  ['All','None'].forEach(mode => {
    const btn = document.createElement('button');
    btn.textContent = mode==='All' ? 'â˜‘ All' : 'â˜ None';
    btn.style.cssText = 'flex:1;background:var(--surface);border:1px solid var(--gray-light);border-radius:4px;color:var(--white);font-size:10px;font-family:Inter,sans-serif;padding:3px 0;cursor:pointer;';
    btn.onmouseover = ()=>btn.style.borderColor='var(--green)';
    btn.onmouseout  = ()=>btn.style.borderColor='#333';
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const val = mode==='All';
      COLUMN_DEFS.forEach(d=>{ colVis[d.col]=val; });
      if (!val) ensureAtLeastOneVisibleColumn('ID');
      panel.querySelectorAll('input[type="checkbox"][data-col]').forEach(cb => {
        cb.checked = colVis[cb.dataset.col] !== false;
      });
      renderHeaders();
      applyFilters();
    });
    btnRow.appendChild(btn);
  });
  panel.appendChild(btnRow);
  [...COLUMN_DEFS].sort((a,b)=>a.label.localeCompare(b.label)).forEach(def => {
    const item = document.createElement('label');
    item.className = 'col-vis-item';
    const cb = document.createElement('input');
    cb.type='checkbox'; cb.dataset.col=def.col; cb.checked=colVis[def.col]!==false;
    cb.addEventListener('change', ()=>{
      colVis[def.col] = cb.checked;
      ensureAtLeastOneVisibleColumn(def.col);
      panel.querySelectorAll('input[type="checkbox"][data-col]').forEach(x => {
        x.checked = colVis[x.dataset.col] !== false;
      });
      renderHeaders();
      applyFilters();
    });
    item.appendChild(cb); item.appendChild(document.createTextNode(def.label));
    panel.appendChild(item);
  });
}

function toggleColVisPanel(evt) {
  evt && evt.stopPropagation();
  initColVisPanel();
  const panel = document.getElementById('col-vis-panel');
  const wasOpen = panel.classList.contains('open');
  document.querySelectorAll('.col-vis-dropdown.open').forEach(p=>p.classList.remove('open'));
  if (!wasOpen) panel.classList.add('open');
}

document.addEventListener('click', ()=>{
  document.querySelectorAll('.col-vis-dropdown.open').forEach(p=>p.classList.remove('open'));
});
document.getElementById('col-vis-panel').addEventListener('click', e => e.stopPropagation());

// â”€â”€ PREFERENCES (localStorage) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const PREFS_KEY = 'apeiron_dashboard_prefs';

function savePrefs() {
  const prefs = { filterGroupState: { ...filterGroupState }, filterGroupOrder: getFilterGroupOrder(), inputs: {}, forecastPeriod,
                  tableSort: { ...tableSort }, chartSel: {}, quickView: activeQuickView };

  // Sidebar filter checkboxes
  document.querySelectorAll('input[type="checkbox"].filter-checkbox').forEach(cb => {
    if (!cb.checked) prefs.inputs[cb.name + '::' + cb.value] = false;
  });
  // Date/range/text inputs
  ['date-from','date-to','global-date-from','global-date-to'].forEach(id => {
    const el = document.getElementById(id);
    if (el && el.value) prefs.inputs[id] = el.value;
  });
  document.querySelectorAll('#dynamic-filter-groups input').forEach(i => {
    if (i.id && i.value && i.type !== 'checkbox') prefs.inputs[i.id] = i.value;
    else if (i.type === 'checkbox' && !i.checked) prefs.inputs[i.name+'::'+i.value] = false;
  });

  // Chart click selections (Set â†’ Array)
  Object.entries(chartHighlightState).forEach(([key, sel]) => {
    if (sel && sel.size > 0) prefs.chartSel[key] = [...sel];
  });

  // Column inline filters - followup
  prefs.colFilters = { ...colFilters };
  prefs.colFiltersVisible = colFiltersVisible;
  prefs.closedSort = { ...closedSort };
  prefs.colOrder = [...colOrder];
  prefs.colVis   = { ...colVis };

  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  document.getElementById('btn-save-prefs').classList.add('has-prefs');
  showToast('Preferences saved');
}

function loadPrefs() {
  const raw = localStorage.getItem(PREFS_KEY);
  if (!raw) return;
  try {
    const prefs = JSON.parse(raw);

    // Restore filter group visibility
    if (prefs.filterGroupState) {
      Object.entries(prefs.filterGroupState).forEach(([key, val]) => {
        if (filterGroupState[key] !== undefined && filterGroupState[key] !== val) {
          setFilterGroup(key, val);
        }
      });
    }
    if (Array.isArray(prefs.filterGroupOrder) && prefs.filterGroupOrder.length) {
      filterGroupOrderPref = [...prefs.filterGroupOrder];
      applyFilterGroupOrder(filterGroupOrderPref);
    }
    // Restore sidebar inputs
    if (prefs.inputs) {
      Object.entries(prefs.inputs).forEach(([key, val]) => {
        if (key.includes('::')) {
          const [name, value] = key.split('::');
          document.querySelectorAll(`input[name="${name}"][value="${value}"]`).forEach(cb => { cb.checked = val; });
        } else {
          const el = document.getElementById(key);
          if (el) el.value = val;
        }
      });
    }
    // Restore column sort
    if (prefs.tableSort) {
      tableSort.col = prefs.tableSort.col;
      tableSort.dir = prefs.tableSort.dir;
      updateSortIndicators();
    }
    // Restore chart selections (Array â†’ Set; re-apply highlight colors after charts render)
    if (prefs.chartSel) {
      Object.entries(prefs.chartSel).forEach(([key, arr]) => {
        chartHighlightState[key] = new Set(arr);
      });
      // Defer color application until after charts are built by applyFilters below
      setTimeout(() => {
        Object.entries(chartHighlightState).forEach(([key, sel]) => {
          if (!sel || !sel.size || !charts[key]) return;
          const bc = chartBaseColors[key];
          if (!bc) return;
          charts[key].data.datasets[bc.dsIdx].backgroundColor = dimColors(bc.colors, sel);
          charts[key].update('none');
        });
        renderTablesWithFilter();
      }, 50);
    }

    setPeriod('all');
    if (prefs.quickView) activeQuickView = prefs.quickView;
    updateQuickViewButtons();

    // Restore column inline filters - followup
    if (prefs.colFilters && Object.keys(prefs.colFilters).length) {
      colFilters = { ...prefs.colFilters };
    }
    if (prefs.colFiltersVisible) setColFiltersVisible(true);
    if (prefs.closedSort) {
      closedSort.col = prefs.closedSort.col;
      closedSort.dir = prefs.closedSort.dir;
      updateClosedSortIndicators();
    }
    // Restore column order and visibility
    if (prefs.colOrder && Array.isArray(prefs.colOrder)) {
      colOrder.length = 0;
      prefs.colOrder.forEach(c => colOrder.push(c));
    }
    COLUMN_DEFS.forEach(def => {
      if (!colOrder.includes(def.col)) colOrder.push(def.col);
    });
    if (prefs.colVis) {
      Object.assign(colVis, prefs.colVis);
      ensureAtLeastOneVisibleColumn('ID');
      // Sync checkboxes in panel if already built
      const panel = document.getElementById('col-vis-panel');
      if (panel && panel.dataset.built) {
        panel.querySelectorAll('input[type="checkbox"][data-col]').forEach(cb => {
          cb.checked = colVis[cb.dataset.col] !== false;
        });
      }
    }
    renderHeaders();
    applyFilters();
    document.getElementById('btn-save-prefs').classList.add('has-prefs');
  } catch(e) { console.warn('Failed to load prefs', e); }
}

let _toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('pref-toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// â”€â”€ INIT CHECKBOXES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function buildCheckboxes(containerId, name, items) {
  const el = document.getElementById(containerId);
  const normalizedItems = [...new Set([...(items || []), EMPTY_FILTER_VALUE])];
  const itemId = (v) => `${name}-${String(v).replace(/[^a-zA-Z0-9_-]/g, '_')}`;
  const itemLabel = (v) => v === EMPTY_FILTER_VALUE ? EMPTY_FILTER_LABEL : v;

  el.innerHTML =
    `<div class="select-all-row">
       <span class="select-toggle" onclick="selectAll('${name}', true)">All</span>
       <span class="select-all-sep">|</span>
       <span class="select-toggle" onclick="selectAll('${name}', false)">None</span>
     </div>` +
    normalizedItems.map(v => `
    <div class="checkbox-item">
      <input type="checkbox" class="filter-checkbox" name="${name}" value="${v}" id="${itemId(v)}" checked>
      <label for="${itemId(v)}">${itemLabel(v)}</label>
    </div>`).join('');

  el.querySelectorAll('input').forEach(cb => cb.addEventListener('change', applyFilters));
}

// â”€â”€ INIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
document.addEventListener('DOMContentLoaded', async () => {
  // Theme
  initThemeToggle();

  // Date label
  document.getElementById('todayLabel').textContent = fmtDate(TODAY);
  updateCurrentDbFileLabel();
  await loadPersistedDbHandle();

  // Build filters
  buildCheckboxes('filter-stage',  'stage',  STAGES);
  buildCheckboxes('filter-status', 'status', STATUS_LIST);
  buildCheckboxes('filter-source', 'source', SOURCE_LIST);

  // Date inputs
  document.getElementById('date-from').addEventListener('change', applyFilters);
  document.getElementById('date-to').addEventListener('change', applyFilters);
  const globalDateFromEl = document.getElementById('global-date-from');
  const globalDateToEl = document.getElementById('global-date-to');
  if (globalDateFromEl) {
    globalDateFromEl.addEventListener('change', () => {
      if (forecastPeriod === 'custom') applyCustomDateRange();
    });
  }
  if (globalDateToEl) {
    globalDateToEl.addEventListener('change', () => {
      if (forecastPeriod === 'custom') applyCustomDateRange();
    });
  }
  toggleGlobalDateInputs();

  // Build default-enabled dynamic filter groups
  initDynamicGroups();
  refreshFilterGroupDrag();

  // Init sort indicator
  updateSortIndicators();

  // Build dynamic column headers
  renderHeaders();
  updateQuickViewButtons();

  // First render - then restore saved preferences
  applyFilters();
  loadPrefs();
  updateDbSaveButton();

  window.addEventListener('resize', scheduleChartViewportSync, { passive: true });
  window.addEventListener('orientationchange', scheduleChartViewportSync, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', scheduleChartViewportSync, { passive: true });
  }
  bindDprWatcher();
  setTimeout(scheduleChartViewportSync, 0);
});

window.addEventListener('beforeunload', (event) => {
  if (!dbDirty) return;
  event.preventDefault();
  event.returnValue = '';
});

// â”€â”€ DATA IMPORT (SheetJS + CSV) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function getDbPickerStartIn() {
  if (currentDbHandle && typeof currentDbHandle.getFile === 'function') return currentDbHandle;
  if (currentDbDirHandle && typeof currentDbDirHandle.values === 'function') return currentDbDirHandle;
  return null;
}

function buildDbOpenPickerOptions(includeStartHint = true) {
  const options = {
    id: DB_PICKER_ID,
    multiple: false,
    types: [{
      description: 'DB files',
      accept: {
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
        'text/csv': ['.csv']
      }
    }]
  };
  if (includeStartHint) {
    const startInHandle = getDbPickerStartIn();
    if (startInHandle) options.startIn = startInHandle;
  }
  return options;
}

async function openDbHandleFromPicker() {
  try {
    const [handle] = await window.showOpenFilePicker(buildDbOpenPickerOptions(true));
    return handle || null;
  } catch (err) {
    if (err && err.name === 'TypeError') {
      // Stored startIn handle can become invalid; reset and ask folder again.
      currentDbHandle = null;
      currentDbDirHandle = null;
      await persistCurrentDbHandle();
      await ensureDbFolderHandleForPicker();
      try {
        const [handle] = await window.showOpenFilePicker(buildDbOpenPickerOptions(true));
        return handle || null;
      } catch (_) {
        const [handle] = await window.showOpenFilePicker(buildDbOpenPickerOptions(false));
        return handle || null;
      }
    }
    throw err;
  }
}
async function triggerDataImport() {
  if (typeof window.showOpenFilePicker === 'function') {
    try {
      await ensureDbFolderHandleForPicker();
      const handle = await openDbHandleFromPicker();
      if (!handle) return;
      currentDbHandle = handle;
      await persistCurrentDbHandle();
      const file = await handle.getFile();
      await importDataFromFileObject(file, true);
      return;
    } catch (err) {
      if (err && err.name === 'AbortError') return;
      console.error(err);
      showToast('Import failed: ' + (err?.message || err));
      return;
    }
  }
  currentDbHandle = null;
  updateDbSaveButton();
  document.getElementById('data-file-input').click();
}

function parseWorkbookRowsFromArrayBuffer(buffer) {
  const wb = XLSX.read(buffer, { type: 'array', cellDates: true });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rawArr = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null });
  let headerRowIdx = 0;
  for (let i = 0; i < Math.min(5, rawArr.length); i++) {
    if (rawArr[i].some(v => v !== null && v !== '')) { headerRowIdx = i; break; }
  }
  const hdrs = rawArr[headerRowIdx].map(h => (h !== null && h !== undefined ? String(h) : null));
  const rows = rawArr.slice(headerRowIdx + 1)
    .filter(r => r.some(v => v !== null))
    .map(r => {
      const obj = {};
      hdrs.forEach((h, i) => { if (h) obj[h] = r[i] ?? null; });
      return obj;
    });
  rows.forEach(r => {
    Object.keys(r).forEach(k => { if (typeof r[k] === 'string') r[k] = r[k].trim(); });
  });
  return rows;
}

function applyImportedRows(rows, fileName) {
  if (!rows || !rows.length) throw new Error('No data found');

  rows.forEach(r => {
    ['Estimated_Value','Forecast_Deal_Value','Probability','Days_on_Stage'].forEach(f => {
      if (r[f] != null && r[f] !== '') r[f] = parseFloat(r[f]) || 0;
    });

    ['Date_Next_Action','Date_Creation','Date_Actual_Stage','Date_Last_Contact'].forEach(f => {
      const iso = normalizeDateScalar(r[f]);
      if (iso) r[f] = iso;
      else if (r[f] === '' || r[f] === undefined) r[f] = null;
    });

    const wk = parseInt(r.Week, 10);
    r.Week = Number.isFinite(wk) && wk >= 1 && wk <= 53
      ? wk
      : (getIsoWeekFromDateString(r.Date_Creation) || null);

    const fcRaw = r['Forecast _Date'] || r['Forecast_Date'];
    if (fcRaw) {
      const s = String(fcRaw).trim();
      const quarterLike = s.replace('_', 'Q').replace(/\s+/g, '');
      if (/^\d{2}Q\d$/.test(quarterLike)) {
        r['Forecast _Date'] = quarterLike;
      } else {
        const isoFc = normalizeDateScalar(fcRaw);
        if (isoFc) {
          const d = new Date(isoFc + 'T00:00:00');
          const yy = String(d.getFullYear()).slice(2);
          const q  = Math.ceil((d.getMonth() + 1) / 3);
          r['Forecast _Date'] = `${yy}Q${q}`;
        } else {
          r['Forecast _Date'] = s || null;
        }
      }
    } else {
      r['Forecast _Date'] = null;
    }
  });

  const integrity = enforceDatasetIntegrity(rows);
  rows.forEach(enrichComputedFields);
  RAW_DATA.length = 0;
  rows.forEach(r => RAW_DATA.push(r));
  document.querySelector('.record-count').innerHTML =
    `Showing <span id="countDisplay">-</span> of ${RAW_DATA.length} records`;
  renderHeaders();
  applyFilters();
  const crmModal = document.getElementById('manage-crm-modal');
  if (crmModal && crmModal.classList.contains('open')) rebuildManageCrmSelectors();
  dbDirty = false;
  updateDbSaveButton();

  const saveModeMsg = currentDbHandle ? 'Direct overwrite enabled.' : 'Download save mode.';
  const fixesMsg = integrity.collisions.length ? ` Integrity fixes: ${integrity.collisions.length} duplicate IDs corrected.` : '';
  showToast(`Loaded ${RAW_DATA.length} records from ${fileName}. ${saveModeMsg}${fixesMsg}`);
}

async function importDataFromFileObject(file, keepHandle) {
  if (!file) return;
  const ext = String(file.name || '').split('.').pop().toLowerCase();
  if (ext !== 'xlsx' && ext !== 'csv') throw new Error('Unsupported file type. Use .xlsx or .csv');

  setCurrentDbFileName(file.name);

  let rows;
  if (ext === 'csv') {
    const txt = await file.text();
    rows = parseCSV(txt);
  } else {
    const arr = await file.arrayBuffer();
    rows = parseWorkbookRowsFromArrayBuffer(arr);
  }

  if (!keepHandle) currentDbHandle = null;
  applyImportedRows(rows, file.name);
}

async function importDataFile(input) {
  const file = input.files[0];
  if (!file) return;
  try {
    currentDbHandle = null;
    await importDataFromFileObject(file, false);
  } catch (err) {
    console.error(err);
    showToast('Import failed: ' + (err?.message || err));
  }
  input.value = '';
}

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g,''));
  return lines.slice(1).map(line => {
    // Simple CSV parse (handles quoted fields)
    const vals = []; let cur = ''; let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') { inQ = !inQ; }
      else if (c === ',' && !inQ) { vals.push(cur.trim()); cur = ''; }
      else { cur += c; }
    }
    vals.push(cur.trim());
    const row = {};
    headers.forEach((h, i) => { row[h] = vals[i] !== undefined ? vals[i] : null; });
    return row;
  });
}

