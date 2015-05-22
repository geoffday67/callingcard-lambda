exports.handler = function(event, context)
{
    var result = {};
    
    // Return uppercase string
    if (event.lowercase)
        result = {uppercase: event.lowercase.toUpperCase()};
    else
        result = {uppercase: "(unknown)"};
    
    // Add identity information
    if (context.clientContext && context.clientContext.env && context.clientContext.env.model)
        result.device = context.clientContext.env.model;
    else
        result.device = "(unknown)";

    context.succeed(result);
};
